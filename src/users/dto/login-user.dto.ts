import {
  IsNotEmpty,
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  Matches,
  // IsBoolean,
} from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail()
  @Field()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'invalid credentials',
  })
  @Field()
  readonly password: string;

  // @IsNotEmpty()
  @IsString()
  readonly role: string;
  // @IsBoolean()
  // readonly isAdmin: boolean;
}
