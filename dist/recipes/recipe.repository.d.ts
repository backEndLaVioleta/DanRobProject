import { Repository } from 'typeorm';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { Recipe } from './entities/recipe.entity';
export declare class RecipeRepository extends Repository<Recipe> {
    saveRecipe(body: CreateRecipeDto): Promise<Recipe>;
}
