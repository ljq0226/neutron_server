import type { PrismaService } from 'src/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class TagService {
  constructor(private readonly prisma: PrismaService) { }
  async getAllTags() {
    return this.prisma.tag.findMany({
      include: {
        posts: true,
      },
    })
  }
}
