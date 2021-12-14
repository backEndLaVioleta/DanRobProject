import {
  AfterInsert,
  AfterUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
  PrimaryColumn,
  BaseEntity,
  Index,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn() _id: ObjectID;
  @PrimaryColumn() id: string;
  @Column() firstName: string;
  @Column() lastName: string;

  @Column()
  @Index({ unique: true })
  email: string;
  @Column() password: string;
  @Column() isAdmin: boolean;

  // TODO: possibly allow various types of users
  // @Column({ default: 'user' }) role: string;

  @CreateDateColumn() createdDate: Date;
  @UpdateDateColumn() updatedDate: Date;

  @AfterInsert()
  logInsert() {
    // console.log('Inserted User with MongoId', this._id, 'and userId', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with userId', this.id);
  }
}
