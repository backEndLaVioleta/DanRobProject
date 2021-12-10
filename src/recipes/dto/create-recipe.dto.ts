import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateRecipeDto {
  @IsNotEmpty()
  readonly recipeName: string;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  readonly photo: string;

  @IsNotEmpty()
  readonly type: any;

  @IsNotEmpty()
  readonly ingredients: string[] | any[];

  @IsNotEmpty()
  @IsOptional()
  readonly allergens: string[];

  @IsNotEmpty()
  @IsOptional()
  readonly extrasAvailable: string[];

  @IsNotEmpty()
  @IsOptional()
  readonly instructions: string;

  @IsNotEmpty()
  readonly prepTime: number;

  @IsNotEmpty()
  readonly cookTime: number;

  @IsNotEmpty()
  readonly totalTime: number;

  @IsNotEmpty()
  @IsOptional()
  readonly isVegan: boolean;

  @IsNotEmpty()
  @IsOptional()
  readonly isVegetarian: boolean;

  @IsNotEmpty()
  @IsOptional()
  readonly isGlutenFree: boolean;

  @IsNotEmpty()
  readonly onMenu: boolean;
}
