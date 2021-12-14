import { Controller, Get, UseGuards } from '@nestjs/common';
import { RecipesService } from './recipes.service';

import { AuthGuard } from '@nestjs/passport';

@Controller('recipes')
@UseGuards(AuthGuard())
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get('/all')
  findAll() {
    return this.recipesService.findAll();
  }
}
