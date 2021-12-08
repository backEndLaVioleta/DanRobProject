/* eslint-disable */
import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  readonly firstName: string;

  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
