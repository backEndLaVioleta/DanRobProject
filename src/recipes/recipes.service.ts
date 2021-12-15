import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.strategy';
import { Roles } from 'src/auth/roles/roles.decorator';
import { Role } from 'src/auth/roles/roles.enum';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { RecipeRepository } from './recipe.repository';

@Injectable()
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth('access-token')
@Roles(Role.Admin)
export class RecipesService {
  constructor(
    @InjectRepository(RecipeRepository)
    private recipeRepository: RecipeRepository,
  ) {}

  async findAll() {
    try {
      // TODO make it ready to sort the list with parameters in the function
      const sort = 'ASC';
      return await this.recipeRepository.find({
        order: { recipeName: sort },
      });
    } catch (error) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'List Not Found',
        error: 'Recipe List not founded',
      });
    }
  }

  async findOneById(id: string) {
    try {
      const recipe = await this.recipeRepository.find({
        where: { recipeId: id },
      });
      console.log(`recipe${recipe} from recipes service`);
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

  async saveRecipe(body: CreateRecipeDto) {
    const exists = await this.recipeRepository.find({
      where: { recipeName: body.recipeName },
    });

    if (!exists.length) {
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
      return this.recipeRepository.remove(recipe);
    } catch (error) {
      throw new NotFoundException('Recipe not found');
    }
  }
}
