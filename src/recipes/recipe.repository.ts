import { EntityRepository, Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Recipe } from './entities/recipe.entity';

@EntityRepository(Recipe)
export class RecipeRepository extends Repository<Recipe> {}
