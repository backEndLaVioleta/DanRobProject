import { ObjectID } from 'typeorm';
export declare class Recipe {
    id: ObjectID;
    recipeId: string;
    recipeName: string;
    description: string;
    photo: string;
    type: 'starters' | 'salads' | 'mains' | 'desserts';
    ingredients: string[];
    extrasAvailable: string[];
    timesMade: number;
    instructions: string;
    prepTime: number;
    cookTime: number;
    totalTime: number;
    allergens: string[];
    isVegan: boolean;
    isVegetarian: boolean;
    isGlutenFree: boolean;
    isDairyFree: boolean;
    isLactoseFree: boolean;
    isNutFree: boolean;
    isPescatarian: boolean;
    isPaleo: boolean;
    isKetogenic: boolean;
    isQuick: boolean;
    isHealthy: boolean;
    isLowFodmap: boolean;
    isSpicy: boolean;
    isEggFree: boolean;
    isSoyFree: boolean;
    isFishFree: boolean;
    isShellfishFree: boolean;
    isPorkFree: boolean;
    isBeefFree: boolean;
    isAlcoholFree: boolean;
    isClean: boolean;
    isSustainable: boolean;
    isLowCarb: boolean;
    isLowSodium: boolean;
    isLowFat: boolean;
    isLowSugar: boolean;
    isWheatFree: boolean;
    onMenu: boolean;
    logInsert(): void;
    logUpdate(): void;
}
