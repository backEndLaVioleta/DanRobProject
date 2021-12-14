import { ObjectType, Field, ID } from '@nestjs/graphql';

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

  @Field()
  createdDate: Date;

  @Field()
  updatedDate: Date;
}
