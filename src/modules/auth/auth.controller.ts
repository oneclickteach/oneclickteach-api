import { Controller, Post, UseGuards, Body, Request, Get, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard, LocalAuthGuard } from 'src/common/guards';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { CurrentUser, Serialize, UserInterface } from 'src/common';
import { AuthDto } from './dto/auth.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetUserDto } from './dto/get-user.dto';
import { Response } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  @Serialize(AuthDto)
  @ApiOkResponse({
    type: AuthDto,
  })
  async signup(@Body() signupDto: SignupDto, @Res({ passthrough: true }) response: Response) {
    return this.authService.signup(signupDto, response);
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @Serialize(AuthDto)
  @ApiOkResponse({
    type: AuthDto,
  })
  async login(@Body() _loginDto: LoginDto, @Request() req, @Res({ passthrough: true }) response: Response) {
    return this.authService.login(req.user, response);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    type: AuthDto,
  })
  async logout(@Request() req, @Res({ passthrough: true }) response: Response) {
    return this.authService.logout(response);
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
    return this.authService.getProfile(user);
  }
}
