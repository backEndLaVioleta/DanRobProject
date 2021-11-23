/* eslint-disable */
import { IsEmail, IsNotEmpty } from "class-validator"

/* eslint-disable */
export class CreateUserDto {
    @IsNotEmpty()
    readonly firstName: string;
  
    @IsNotEmpty()
    readonly lastName: string;
  
    @IsEmail()
    readonly email: string;
  
    @IsNotEmpty()
    readonly password: string;
  
    @IsNotEmpty()
    readonly role: string;
  
    readonly creation_date: Date;

}
// we will need to change it when auth plays its role