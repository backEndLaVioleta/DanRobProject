import { Repository } from 'typeorm';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from './entities/recipe.entity';
export declare class RecipesService {
    private recipeRepository;
    constructor(recipeRepository: Repository<Recipe>);
    create(body: CreateRecipeDto): Promise<Recipe>;
    findAll(): Promise<Recipe[]>;
    findOne(id: string): Promise<Recipe>;
    update(id: string, updateRecipeDto: UpdateRecipeDto): Promise<Recipe>;
    remove(id: string): Promise<Recipe>;
}
