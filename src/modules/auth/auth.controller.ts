import { Controller, Post, UseGuards, Body, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard, LocalAuthGuard } from 'src/common/guards';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { CurrentUser, Serialize, UserInterface } from 'src/common';
import { AuthDto } from './dto/auth.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetUserDto } from './dto/get-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @Serialize(AuthDto)
  @ApiOkResponse({
    type: AuthDto,
  })
  async signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @Serialize(AuthDto)
  @ApiOkResponse({
    type: AuthDto,
  })
  async login(@Body() _loginDto: LoginDto, @Request() req) {
    return this.authService.login(req.user);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @Serialize(GetUserDto)
  @ApiTags('protected')
  @ApiBearerAuth('access_token')
  @ApiOkResponse({
    type: GetUserDto,
  })
  async getUserProfile(@CurrentUser() user: UserInterface) {
    return this.authService.getProfile(user.id);
  }
}
