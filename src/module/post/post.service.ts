import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) { }


  async getAllPosts() {
    const posts = await this.prisma.post.findMany({
      include: {
        tags: true
      }
    })
    console.log(posts)
    return posts
  }
}
