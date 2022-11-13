import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) { }
  @Get('getAllTag')
  getAllTags() {
    return this.tagService.getAllTags();
  }
}
