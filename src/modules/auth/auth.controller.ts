import { Controller, Post, UseGuards, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from 'src/common/guards';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { Serialize } from 'src/common';
import { AuthDto } from './dto/auth.dto';
import { ApiOkResponse } from '@nestjs/swagger';

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
}
