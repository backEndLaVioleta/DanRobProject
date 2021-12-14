import { Recipe } from 'src/recipes/entities/recipe.entity';
import { ObjectID } from 'typeorm';
export declare class Menu {
    id: ObjectID;
    recipeId: ObjectID[];
    menuItemName: string;
    menuItemRecipe: Recipe;
    menuItemDescription: string;
    menuItemPhoto: string;
    menuItemType: string;
    menuItemPrice: number;
    menuItemAllergens: string[];
    menuItemExtrasAvailable: string[];
}
