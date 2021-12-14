import { RecipesService } from './recipes.service';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { CreateRecipeDto } from './dto/create-recipe.dto';
export declare class RecipesController {
    private readonly recipesService;
    constructor(recipesService: RecipesService);
    findAll(): Promise<import("./entities/recipe.entity").Recipe[]>;
    findOneById(id: string): Promise<import("./entities/recipe.entity").Recipe[]>;
    saveRecipe(body: CreateRecipeDto): Promise<import("./entities/recipe.entity").Recipe>;
    updateRecipe(id: string, body: UpdateRecipeDto): Promise<import("./entities/recipe.entity").Recipe>;
    removeRecipe(id: string): Promise<import("./entities/recipe.entity").Recipe>;
}
