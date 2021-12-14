import { Expose } from 'class-transformer';

export class RecipeDto {
  @Expose()
  recipeId: string;

  @Expose()
  recipeName: string;

  @Expose()
  description: string;

  @Expose()
  photo: string;

  @Expose()
  type: 'starters' | 'salads' | 'mains' | 'desserts';

  @Expose()
  ingredients: string[];

  @Expose()
  extrasAvailable: string[];

  @Expose()
  timesMade: number;

  @Expose()
  instructions: string;

  @Expose()
  prepTime: number;

  @Expose()
  cookTime: number;

  @Expose()
  totalTime: number;

  @Expose()
  allergens: string[];

  @Expose()
  isVegan: boolean;

  @Expose()
  isVegetarian: boolean;

  @Expose()
  isGlutenFree: boolean;

  @Expose()
  isDairyFree: boolean;

  @Expose()
  isLactoseFree: boolean;

  @Expose()
  isNutFree: boolean;

  @Expose()
  isPescatarian: boolean;

  @Expose()
  isPaleo: boolean;

  @Expose()
  isKetogenic: boolean;

  @Expose()
  isQuick: boolean;

  @Expose()
  isHealthy: boolean;

  @Expose()
  isLowFodmap: boolean;

  @Expose()
  isSpicy: boolean;

  @Expose()
  isEggFree: boolean;

  @Expose()
  isSoyFree: boolean;

  @Expose()
  isFishFree: boolean;

  @Expose()
  isShellfishFree: boolean;

  @Expose()
  isPorkFree: boolean;

  @Expose()
  isBeefFree: boolean;

  @Expose()
  isAlcoholFree: boolean;

  @Expose()
  isClean: boolean;

  @Expose()
  isSustainable: boolean;

  @Expose()
  isLowCarb: boolean;

  @Expose()
  isLowSodium: boolean;

  @Expose()
  isLowFat: boolean;

  @Expose()
  isLowSugar: boolean;

  @Expose()
  isWheatFree: boolean;

  @Expose()
  onMenu: boolean;
}
