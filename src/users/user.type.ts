import { ObjectType, Field, ID } from '@nestjs/graphql';
import { RecipeType } from '../recipes/recipe.type';

@ObjectType('User')
export class UserType {
  @Field((type) => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  password: string;

  @Field()
  isAdmin: boolean;

  @Field((type) => [RecipeType])
  recipes: string[];

  @Field()
  createdDate: Date;

  @Field()
  updatedDate: Date;

  @Field()
  role: string;
}
