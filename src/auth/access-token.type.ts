import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('AccessToken')
export class AccessTokenType {
  @Field()
  access_token: string;
}
