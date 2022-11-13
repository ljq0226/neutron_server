import { Controller, Get } from '@nestjs/common'
import type { PostService } from './post.service'

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {
  }

  @Get('getAllPosts')
  getAllPosts() {
    return this.postService.getAllPosts()
  }
}
