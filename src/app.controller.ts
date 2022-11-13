import type { ConfigService } from '@nestjs/config'
import { Controller, Get, Param } from '@nestjs/common'
import type { AppService } from './app.service'
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly config: ConfigService,
  ) { }
}
