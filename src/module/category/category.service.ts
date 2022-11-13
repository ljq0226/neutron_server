import { Injectable } from '@nestjs/common'
import type { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) { }
  async getAllCategory() {
    return await this.prisma.category.findMany()
  }
}
