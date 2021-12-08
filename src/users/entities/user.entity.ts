import {
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
  @Column() role: string;
  @Column({ default: false }) isAdmin: boolean;
  @CreateDateColumn() createdDate: Date;
  @UpdateDateColumn() updatedDate: Date;
}
