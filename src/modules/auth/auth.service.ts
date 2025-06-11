import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { compareHash, createHash } from 'src/utils/hash.utils';
import { SignupDto } from './dto/signup.dto';
import { TokenPayloadInterface } from './interfaces/token-payload.interface';
import { ConfigService } from '@nestjs/config';
import { UserRole } from 'src/common/enums/user.enum';
import { UserInterface } from 'src/common';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) { }

  async signup(signupDto: SignupDto, response: Response) {
    const { email, password, mobile_phone, first_name, last_name } = signupDto;
    const hashedPassword = await createHash(password);

    const user = await this.usersService.createNewUser({
      email,
      hashed_password: hashedPassword,
      mobile_phone,
      first_name,
      last_name,
      email_is_verified: false,
      mobile_phone_is_verified: false,
      user_role: UserRole.STUDENT,
    });

    return this.login(user, response);
  }

  async login(user: UserInterface, response: Response) {
    const access_token = await this.authenticate(user.id, user.user_role, response);
    return { access_token, user };
  }

  async logout(response: Response) {
    return this.unauthenticate(response);
  }

  async getProfile({ id }: UserInterface) {
    const user = await this.usersService.findOne({ id });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }

  async validateUser(email: string, password: string): Promise<any> {
    try {
      const user = await this.usersService.findOne({ email });
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const isPasswordValid = await compareHash(user.hashed_password, password);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid credentials');
      }

      // Never return password in response
      const { hashed_password, ...result } = user;
      return result;
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  private async authenticate(id: string, user_role: string, response: Response): Promise<string> {
    const tokenPayloadInterface: TokenPayloadInterface = {
      id,
      user_role,
    };

    const expiration_in_seconds = this.configService.get<number>('JWT_EXPIRATION', 60 * 60); // Default to 1 hour
    const expires = new Date();
    expires.setSeconds(expires.getSeconds() + expiration_in_seconds);

    const token = this.jwtService.sign(tokenPayloadInterface, { expiresIn: expiration_in_seconds });

    response.cookie('Authentication', token, {
      httpOnly: true,
      // secure: true,
      secure: false,
      // sameSite: 'strict',
      sameSite: 'lax',
      maxAge: expiration_in_seconds * 1000,
    });

    return token;
  }

  private async unauthenticate(response: Response) {
    response.cookie('Authentication', '', {
      httpOnly: true,
      // secure: true,
      secure: false,
      // sameSite: 'strict',
      sameSite: 'lax',
      maxAge: 0,
    });

    return;
  }
}
