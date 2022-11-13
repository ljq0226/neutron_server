import { Controller, Request, Post, UseGuards, Body, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/loginDto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() user: LoginDto, @Req() req) {
    return this.authService.login(req.user);
  }
}
