/* eslint-disable  */
import {Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn} from 'typeorm'

@Entity('user')
 export class User {
 //@ObjectIdColumn() id: ObjectID; to decide with Dan
 @PrimaryGeneratedColumn() id: number;
 @Column() firstName: string;
 @Column() lastName: string;
 @Column({ unique: true }) email: string;
 @Column() password: string;
 @Column() role: string;
 @Column({ nullable: true }) dateCreation: Date;

 
}
 