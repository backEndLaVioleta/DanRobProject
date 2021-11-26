import { IsEmail } from 'class-validator';
import { UserAlreadyExist } from 'src/common/validations/emailValidation';
import { Column, Entity, ObjectID, ObjectIdColumn, Unique } from 'typeorm';

@Entity()
@Unique(['email'])
export class User {
  // to discuss with Dan
  // @PrimaryGeneratedColumn() id: number
  @ObjectIdColumn() id: ObjectID;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column({ unique: true })
  @IsEmail()
  @UserAlreadyExist()
  email: string;
  @Column() password: string;
  @Column() role: string;
  @Column() creation_date?: Date;

  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}
