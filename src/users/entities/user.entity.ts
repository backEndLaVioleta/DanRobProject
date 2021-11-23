import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn() id: ObjectID;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column() email: string;
  @Column() password: string;
  @Column() role: string;
  @Column() creation_date?: Date;

  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}
