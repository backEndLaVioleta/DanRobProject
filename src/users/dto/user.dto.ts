import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  id: string;

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
  role: string;

  @Expose()
  access_token: string;
}
