import Encryptation from 'src/common/encrytation.helper';
import {
  BeforeInsert,
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn() id: ObjectID;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column() email: string;
  @Column() password: string;
  @Column() role: string;
  @BeforeInsert()
  async hashPassword() {
    this.password = await Encryptation.encryptPassword(this.password);
  }

  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}
