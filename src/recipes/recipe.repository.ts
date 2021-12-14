import { EntityRepository, Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { Recipe } from './entities/recipe.entity';

@EntityRepository(Recipe)
export class RecipeRepository extends Repository<Recipe> {
  async saveRecipe(body: CreateRecipeDto): Promise<Recipe> {
    const { ...newRecipe } = body;

    const recipe = this.create();
    recipe.recipeId = uuid();

    Object.assign(recipe, newRecipe);

    return await this.save(recipe);
  }
}
