import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Recipe')
export class RecipeType {
  @Field((type) => ID)
  recipeId: string;

  @Field()
  recipeName: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  photo?: string;

  @Field({ nullable: true })
  type?: 'starters' | 'salads' | 'mains' | 'desserts';

  @Field(() => [String])
  ingredients?: string[];

  @Field(() => [String])
  extrasAvailable?: string[];

  @Field({ nullable: true })
  timesMade?: number;

  @Field({ nullable: true })
  instructions?: string;

  @Field({ nullable: true })
  prepTime?: number;

  @Field({ nullable: true })
  cookTime?: number;

  @Field({ nullable: true })
  totalTime?: number;

  @Field(() => [String])
  allergens?: string[];

  @Field({ nullable: true })
  isVegan?: boolean;

  @Field({ nullable: true })
  isVegetarian?: boolean;

  @Field({ nullable: true })
  isGlutenFree?: boolean;

  @Field({ nullable: true })
  isDairyFree?: boolean;

  @Field({ nullable: true })
  isLactoseFree?: boolean;

  @Field({ nullable: true })
  isNutFree?: boolean;

  @Field({ nullable: true })
  isPescatarian?: boolean;

  @Field({ nullable: true })
  isPaleo?: boolean;

  @Field({ nullable: true })
  isKetogenic?: boolean;

  @Field({ nullable: true })
  isQuick?: boolean;

  @Field({ nullable: true })
  isHealthy?: boolean;

  @Field({ nullable: true })
  isLowFodmap?: boolean;

  @Field({ nullable: true })
  isSpicy?: boolean;

  @Field({ nullable: true })
  isEggFree?: boolean;

  @Field({ nullable: true })
  isSoyFree?: boolean;

  @Field({ nullable: true })
  isFishFree?: boolean;

  @Field({ nullable: true })
  isShellfishFree?: boolean;

  @Field({ nullable: true })
  isPorkFree?: boolean;

  @Field({ nullable: true })
  isBeefFree?: boolean;

  @Field({ nullable: true })
  isAlcoholFree?: boolean;

  @Field({ nullable: true })
  isClean?: boolean;

  @Field({ nullable: true })
  isSustainable?: boolean;

  @Field({ nullable: true })
  isLowCarb?: boolean;

  @Field({ nullable: true })
  isLowSodium?: boolean;

  @Field({ nullable: true })
  isLowFat?: boolean;

  @Field({ nullable: true })
  isLowSugar?: boolean;

  @Field({ nullable: true })
  isWheatFree?: boolean;

  @Field({ nullable: true })
  onMenu?: boolean;
}
