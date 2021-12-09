import { Expose } from 'class-transformer';
import { ObjectID } from 'typeorm';

export class UserDto {
  @Expose()
  id: ObjectID;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Expose()
  createdDate: Date;

  @Expose()
  updatedDate: Date;

  @Expose()
  isAdmin: boolean;

  @Expose()
  access_token: string;
}
