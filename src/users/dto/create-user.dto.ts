import {
  IsNotEmpty,
  IsEmail,
  IsString,
  IsOptional,
  MinLength,
  MaxLength,
  Matches,
  IsUUID,
} from 'class-validator';
import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field()
  @IsOptional()
  readonly firstName: string;

  @IsOptional()
  @Field()
  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @Field()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  @Field()
  readonly password: string;

  @IsOptional()
  @Field({ defaultValue: 'user' })
  readonly role: string;

  @Field(() => [ID], { defaultValue: [] })
  recipes: string[];
}
