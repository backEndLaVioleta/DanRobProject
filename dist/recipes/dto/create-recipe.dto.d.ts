export declare class CreateRecipeDto {
    readonly recipeName: string;
    readonly description: string;
    readonly photo: string;
    readonly type: any;
    readonly ingredients: string[] | any[];
    readonly allergens: string[];
    readonly extrasAvailable: string[];
    readonly instructions: string;
    readonly prepTime: number;
    readonly cookTime: number;
    readonly totalTime: number;
    readonly isVegan: boolean;
    readonly isVegetarian: boolean;
    readonly isGlutenFree: boolean;
    readonly onMenu: boolean;
}
