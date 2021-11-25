/* eslint-disable */
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  // to discuss with Dan
  // @PrimaryGeneratedColumn() id: number
  @ObjectIdColumn() id: ObjectID;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column({unique: true}) email: string;
  @Column() password: string;
  @Column() role: string;
  @Column() creation_date?: Date;

  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}
