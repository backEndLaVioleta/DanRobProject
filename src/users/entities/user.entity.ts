import { Encryptation } from '../../common/utilities/encryptation.helper';
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
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {
  @ObjectIdColumn() id: ObjectID;
  @PrimaryColumn() userId: string;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column({ unique: true }) email: string;
  @Column() password: string;
  @Column({ default: false }) isAdmin: boolean;

  // TODO: possibly allow various types of users
  // @Column({ default: 'user' }) role: string;

  @CreateDateColumn() createdDate: Date;
  @UpdateDateColumn() updatedDate: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await Encryptation.encryptPassword(this.password);
  }

  @BeforeInsert()
  assignRole() {
    this.isAdmin = false;
  }

  @BeforeInsert()
  generateUUId() {
    this.userId = uuidv4();
  }

  @AfterInsert()
  logInsert() {
    console.log(
      'Inserted User with MongoId',
      this.id,
      'and userId',
      this.userId,
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
