import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module'
import { UserModule } from './module/user/user.module'
import { AuthModule } from './auth/auth.module'
import { PostModule } from './module/post/post.module'
import { TagModule } from './module/tag/tag.module'
import { CategoryModule } from './module/category/category.module'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, UserModule, AuthModule, PostModule, TagModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
