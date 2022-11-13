import { Injectable } from '@nestjs/common'
import type { UserService } from 'src/module/user/user.service'
import type { JwtService } from '@nestjs/jwt'
import type { PrismaService } from '../prisma/prisma.service'
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.prisma.user.findFirst({ where: { username } })
    if (user && user.password === password) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: any) {
    const userInfo = { username: user.username, sub: user.id }
    return {
      access_token: this.jwtService.sign(userInfo),
    }
  }
}
