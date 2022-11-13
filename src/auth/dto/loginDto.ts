import { ApiProperty } from "@nestjs/swagger";
import { isNotEmpty, isString } from "class-validator";

export class LoginDto {
  @ApiProperty({ description: '用户名' })
  username: string;
  @ApiProperty({ description: '密码' })
  password: string;
}
