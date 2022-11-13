import { Controller, Get } from '@nestjs/common'
import type { CategoryService } from './category.service'

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }
  @Get('getAllCategory')
  getAllCategory() {
    return this.categoryService.getAllCategory()
  }
}
