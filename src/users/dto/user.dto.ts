import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  id: number;

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
}
