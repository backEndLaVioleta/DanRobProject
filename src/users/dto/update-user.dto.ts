import { IsEmail, IsOptional, IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserDto {
  @IsOptional()
  @Field({ nullable: true })
  firstName: string;

  @IsOptional()
  @Field({ nullable: true })
  lastName: string;

  @IsOptional()
  @IsEmail()
  @Field({ nullable: true })
  email: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  password: string;
}
