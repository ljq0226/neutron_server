import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Auth } from 'src/core/decorator/auth.decorator';
import { Admin } from 'src/core/decorator/admin.decorator';

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
