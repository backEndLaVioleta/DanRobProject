import { IsEmail, IsOptional, IsString } from 'class-validator';

/*eslint-disable */
export class UpdateUserDto {
  @IsOptional()
  firstName: string;

  @IsOptional()
  lastName: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password: string;
}