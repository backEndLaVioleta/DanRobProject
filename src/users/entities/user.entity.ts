import {
  AfterInsert,
  AfterUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn() id: ObjectID;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column() email: string;
  @Column() password: string;
  @Column({ default: false }) isAdmin: boolean;

  // TODO: possibly allow various types of users
  // @Column({ default: 'user' }) role: string;

  @CreateDateColumn() createdDate: Date;
  @UpdateDateColumn() updatedDate: Date;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with id', this.id);
  }
}
