import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';

import { AuthGuard } from '@nestjs/passport';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { RecipeDto } from './dto/recipe.dto';
import { Serialize } from '../interceptors/serialize.interceptor';

@Controller('recipes')
@Serialize(RecipeDto)
@UseGuards(AuthGuard())
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get('/')
  findAll() {
    return this.recipesService.findAll();
  }

  @Get('/:id')
  async findOneById(@Param('id') id: string) {
    return this.recipesService.findOneById(id);
  }

  @Post()
  async saveRecipe(@Body() body: CreateRecipeDto) {
    return this.recipesService.saveRecipe(body);
  }

  @Patch('/:id')
  async updateRecipe(@Param('id') id: string, @Body() body: UpdateRecipeDto) {
    return this.recipesService.updateRecipe(id, body);
  }

  @Delete('/:id')
  async removeRecipe(@Param('id') id: string) {
    return this.recipesService.removeRecipe(id);
  }
}
