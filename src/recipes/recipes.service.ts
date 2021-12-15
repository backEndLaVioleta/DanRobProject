import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from './entities/recipe.entity';
import { RecipeRepository } from './recipe.repository';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(RecipeRepository)
    private recipeRepository: RecipeRepository,
  ) {}

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

  async findManyRecipes(ids: string[]): Promise<Recipe[]> {
    try {
      const recipes = await this.recipeRepository.find({
        where: {
          recipeId: {
            $in: ids,
          },
        },
      });
      if (!recipes) {
        throw new NotFoundException('Recipes not found');
      }
      return recipes;
    } catch (error) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Recipes not found',
        error: 'Recipes seems to be not in the DDBB ',
      });
    }
  }

  async findOneById(id: string): Promise<Recipe> {
    try {
      const recipe = await this.recipeRepository.find({
        where: { recipeId: id },
      });

      if (!recipe) {
        throw new NotFoundException('Recipe not found');
      }
      return recipe[0];
    } catch (error) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Recipe Not Found',
        error: 'Recipe seems to be not in the DDBB ',
      });
    }
  }

  async saveRecipe(body: CreateRecipeDto) {
    const exists = await this.recipeRepository.find({
      where: { recipeName: body.recipeName },
    });

    if (exists.length > 0) {
      throw new ConflictException('Recipe already exists');
    }

    const recipe = await this.recipeRepository.saveRecipe(body);
    return recipe;
  }

  async updateRecipe(id: string, updateRecipeDto: UpdateRecipeDto) {
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

  async removeRecipe(id: string) {
    const recipe = await this.recipeRepository.findOne({ recipeId: id });
    if (!recipe) {
      throw new NotFoundException('Recipe not found');
    }
    try {
      this.recipeRepository.remove(recipe);
      return recipe;
    } catch (error) {
      throw new NotFoundException('Recipe not found');
    }
  }
}
