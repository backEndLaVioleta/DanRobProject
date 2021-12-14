import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Recipe')
export class RecipeType {
  @Field((type) => ID)
  recipeId: string;

  @Field()
  recipeName: string;

  @Field()
  description: string;

  @Field()
  photo: string;

  @Field()
  type: 'starters' | 'salads' | 'mains' | 'desserts';

  @Field(() => [String])
  ingredients: string[];

  @Field(() => [String])
  extrasAvailable: string[];

  @Field()
  timesMade: number;

  @Field()
  instructions: string;

  @Field()
  prepTime: number;

  @Field()
  cookTime: number;

  @Field()
  totalTime: number;

  @Field(() => [String])
  allergens: string[];

  @Field()
  isVegan: boolean;

  @Field()
  isVegetarian: boolean;

  @Field()
  isGlutenFree: boolean;

  @Field()
  isDairyFree: boolean;

  @Field()
  isLactoseFree: boolean;

  @Field()
  isNutFree: boolean;

  @Field()
  isPescatarian: boolean;

  @Field()
  isPaleo: boolean;

  @Field()
  isKetogenic: boolean;

  @Field()
  isQuick: boolean;

  @Field()
  isHealthy: boolean;

  @Field()
  isLowFodmap: boolean;

  @Field()
  isSpicy: boolean;

  @Field()
  isEggFree: boolean;

  @Field()
  isSoyFree: boolean;

  @Field()
  isFishFree: boolean;

  @Field()
  isShellfishFree: boolean;

  @Field()
  isPorkFree: boolean;

  @Field()
  isBeefFree: boolean;

  @Field()
  isAlcoholFree: boolean;

  @Field()
  isClean: boolean;

  @Field()
  isSustainable: boolean;

  @Field()
  isLowCarb: boolean;

  @Field()
  isLowSodium: boolean;

  @Field()
  isLowFat: boolean;

  @Field()
  isLowSugar: boolean;

  @Field()
  isWheatFree: boolean;

  @Field()
  onMenu: boolean;
}
