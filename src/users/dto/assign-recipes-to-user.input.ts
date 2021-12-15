import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignRecipesToUserInput {
  @IsUUID()
  @Field((type) => ID)
  userId: string;

  @IsUUID('4', { each: true })
  @Field((type) => [ID], { nullable: true })
  recipeIds?: string[];
}
