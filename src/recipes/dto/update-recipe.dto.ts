import { IsOptional } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateRecipeDto {
  @Field({ nullable: true })
  @IsOptional()
  recipeName: string;

  @Field({ nullable: true })
  @IsOptional()
  description: string;

  @Field({ nullable: true })
  @IsOptional()
  photo: string;

  @Field({ nullable: true })
  @IsOptional()
  type: 'starters' | 'salads' | 'mains' | 'desserts';

  @Field(() => [String], { nullable: true })
  @IsOptional()
  ingredients: string[];

  @Field(() => [String], { nullable: true })
  @IsOptional()
  extrasAvailable: string[];

  @Field({ nullable: true })
  @IsOptional()
  timesMade: number;

  @Field({ nullable: true })
  @IsOptional()
  instructions: string;

  @Field({ nullable: true })
  @IsOptional()
  prepTime: number;

  @Field({ nullable: true })
  @IsOptional()
  cookTime: number;

  @Field({ nullable: true })
  @IsOptional()
  totalTime: number;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  allergens: string[];

  @Field({ nullable: true })
  @IsOptional()
  isVegan: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isVegetarian: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isGlutenFree: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isDairyFree: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isLactoseFree: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isNutFree: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isPescatarian: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isPaleo: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isKetogenic: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isQuick: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isHealthy: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isLowFodmap: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isSpicy: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isEggFree: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isSoyFree: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isFishFree: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isShellfishFree: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isPorkFree: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isBeefFree: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isAlcoholFree: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isClean: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isSustainable: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isLowCarb: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isLowSodium: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isLowFat: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isLowSugar: boolean;

  @Field({ nullable: true })
  @IsOptional()
  isWheatFree: boolean;

  @Field({ nullable: true })
  @IsOptional()
  onMenu: boolean;
}
