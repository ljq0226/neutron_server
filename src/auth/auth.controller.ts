import { Body, Controller, Post, Req, Request, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import type { AuthService } from './auth.service'
import type { LoginDto } from './dto/loginDto'

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() user: LoginDto, @Req() req) {
    return this.authService.login(req.user)
  }
}
