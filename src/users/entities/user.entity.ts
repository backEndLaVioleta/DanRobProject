import Encryptation from 'src/common/utilities/encrytation.helper';
import {
  AfterInsert,
  AfterUpdate,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {
  @ObjectIdColumn() id: ObjectID;
  @Column() userId: string = uuidv4();
  @Column() firstName: string;
  @Column() lastName: string;
  @Column({ unique: true }) email: string;
  @Column() password: string;
  @Column({ type: 'boolean', default: false }) isAdmin: boolean;

  // TODO: possibly allow various types of users
  // @Column({ default: 'user' }) role: string;

  @CreateDateColumn() createdDate: Date;
  @UpdateDateColumn() updatedDate: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await Encryptation.encryptPassword(this.password);
  }

  // @BeforeInsert()
  // @BeforeUpdate()
  // async assignRole() {
  //   console.log(this.isAdmin);
  //   this.isAdmin == false ? (this.isAdmin = false) : (this.isAdmin = true);
  // }

  @AfterInsert()
  logInsert() {
    console.log(
      'Inserted User with MongoId',
      this.id,
      'and userId',
      this.userId,
      'and user role',
      this.isAdmin,
    );
  }

  @AfterUpdate()
  logUpdate() {
    console.log(
      'Updated User with MongoId',
      this.id,
      'and userId',
      this.userId,
    );
  }
}
