import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common'
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger'
import { AuthGuard } from '@nestjs/passport'
import { Auth } from 'src/core/decorator/auth.decorator'
import { Admin } from 'src/core/decorator/admin.decorator'
import { UpdateUserDto } from './dto/update-user.dto'
import { CreateUserDto } from './dto/create-user.dto'
import type { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @ApiOperation({ summary: '获取登录用户信息' })
  @ApiBearerAuth()
  @Auth()
  @Get('userinfo')
  getUserInfo(@Req() req) {
    console.log(req.user)
    return req.user
  }

  @ApiOperation({ summary: '获取所有用户信息' })
  @ApiBearerAuth()
  @Admin()
  // @Auth()
  @Get('allUserinfo')
  getAllUsersInfo() {
    return this.userService.getAllUsersInfo()
  }
}
