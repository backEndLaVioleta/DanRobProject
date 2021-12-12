/* eslint-disable */
import { IsNotEmpty, IsEmail, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  readonly firstName: string;

  @IsOptional()
  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsBoolean()
  readonly isAdmin: boolean;

}
