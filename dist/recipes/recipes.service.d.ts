import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { RecipeRepository } from './recipe.repository';
export declare class RecipesService {
    private recipeRepository;
    constructor(recipeRepository: RecipeRepository);
    findAll(): Promise<import("./entities/recipe.entity").Recipe[]>;
    findOneById(id: string): Promise<import("./entities/recipe.entity").Recipe[]>;
    saveRecipe(body: CreateRecipeDto): Promise<import("./entities/recipe.entity").Recipe>;
    updateRecipe(id: string, updateRecipeDto: UpdateRecipeDto): Promise<import("./entities/recipe.entity").Recipe>;
    removeRecipe(id: string): Promise<import("./entities/recipe.entity").Recipe>;
}
