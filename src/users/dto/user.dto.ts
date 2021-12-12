import { Expose } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ObjectID } from 'typeorm';

export class UserDto {
  @Expose()
  userId: ObjectID;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @IsNotEmpty()
  email: string;

  @IsString()
  password: string;

  @Expose()
  createdDate: Date;

  @Expose()
  updatedDate: Date;

  @Expose()
  isAdmin: boolean;

  @Expose()
  access_token: string;
}
