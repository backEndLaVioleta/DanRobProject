import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipeRepository: Repository<Recipe>,
  ) {}
  async create(body: CreateRecipeDto) {
    try {
      const recipe = this.recipeRepository.create(body);
      return await this.recipeRepository.save(recipe);
    } catch (error) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'Bad Request',
        error: 'Recipe not save into the DDBB',
      });
    }
  }

  async findAll() {
    try {
      return await this.recipeRepository.find();
    } catch (error) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'List Not Found',
        error: 'Recipe List not founded',
      });
    }
  }

  async findOne(id: string) {
    try {
      const recipe = await this.recipeRepository.findOne({ recipeId: id });
      if (!recipe) {
        throw new NotFoundException('Recipe not found');
      }
      return recipe;
    } catch (error) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Recipe Not Found',
        error: 'Recipe seems to be not in the DDBB ',
      });
    }
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto) {
    try {
      const recipe = await this.recipeRepository.findOne({ recipeId: id });
      if (!recipe) {
        throw new NotFoundException('recipe not found');
      }
      Object.assign(recipe, updateRecipeDto);

      return this.recipeRepository.save(recipe);
    } catch (error) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'Bad Request',
        error: 'Recipe NOT updated.',
      });
    }
  }

  async remove(id: string) {
    try {
      const recipe = await this.recipeRepository.findOne({ recipeId: id });
      if (!recipe) {
        throw new NotFoundException('Recipe not found');
      }
      return this.recipeRepository.remove(recipe);
    } catch (error) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'Bad Request',
        error: 'Recipe NOT deleted.',
      });
    }
  }
}
