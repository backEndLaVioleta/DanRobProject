import { IsNotEmpty, IsOptional } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRecipeDto {
  @Field()
  @IsNotEmpty()
  readonly recipeName: string;

  @Field()
  @IsNotEmpty()
  readonly description: string;

  @Field()
  @IsOptional()
  photo: string;

  @Field()
  @IsOptional()
  type: 'starters' | 'salads' | 'mains' | 'desserts';

  @Field(() => [String])
  @IsOptional()
  ingredients: string[];

  @Field(() => [String])
  @IsOptional()
  extrasAvailable: string[];

  @Field()
  @IsOptional()
  timesMade: number;

  @Field()
  @IsOptional()
  instructions: string;

  @Field()
  @IsOptional()
  prepTime: number;

  @Field()
  @IsOptional()
  cookTime: number;

  @Field()
  @IsOptional()
  totalTime: number;

  @Field(() => [String])
  @IsOptional()
  allergens: string[];

  @Field()
  @IsOptional()
  isVegan: boolean;

  @Field()
  @IsOptional()
  isVegetarian: boolean;

  @Field()
  @IsOptional()
  isGlutenFree: boolean;

  @Field()
  @IsOptional()
  isDairyFree: boolean;

  @Field()
  @IsOptional()
  isLactoseFree: boolean;

  @Field()
  @IsOptional()
  isNutFree: boolean;

  @Field()
  @IsOptional()
  isPescatarian: boolean;

  @Field()
  @IsOptional()
  isPaleo: boolean;

  @Field()
  @IsOptional()
  isKetogenic: boolean;

  @Field()
  @IsOptional()
  isQuick: boolean;

  @Field()
  @IsOptional()
  isHealthy: boolean;

  @Field()
  @IsOptional()
  isLowFodmap: boolean;

  @Field()
  @IsOptional()
  isSpicy: boolean;

  @Field()
  @IsOptional()
  isEggFree: boolean;

  @Field()
  @IsOptional()
  isSoyFree: boolean;

  @Field()
  @IsOptional()
  isFishFree: boolean;

  @Field()
  @IsOptional()
  isShellfishFree: boolean;

  @Field()
  @IsOptional()
  isPorkFree: boolean;

  @Field()
  @IsOptional()
  isBeefFree: boolean;

  @Field()
  @IsOptional()
  isAlcoholFree: boolean;

  @Field()
  @IsOptional()
  isClean: boolean;

  @Field()
  @IsOptional()
  isSustainable: boolean;

  @Field()
  @IsOptional()
  isLowCarb: boolean;

  @Field()
  @IsOptional()
  isLowSodium: boolean;

  @Field()
  @IsOptional()
  isLowFat: boolean;

  @Field()
  @IsOptional()
  isLowSugar: boolean;

  @Field()
  @IsOptional()
  isWheatFree: boolean;

  @Field()
  @IsOptional()
  onMenu: boolean;
}
