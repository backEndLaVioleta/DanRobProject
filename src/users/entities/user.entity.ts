import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
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
  @ApiProperty({ example: 'as-1234h73' })
  @ObjectIdColumn()
  _id: ObjectID;

  @ApiProperty({ example: 'as-1234h73' })
  @PrimaryColumn()
  id: string;

  @ApiProperty({ example: 'John' })
  @Column()
  firstName: string;

  @ApiProperty({ example: 'Wick' })
  @Column()
  lastName: string;

  @ApiProperty({ example: 'hello@hello.com' })
  @IsNotEmpty()
  @Column()
  @Index({ unique: true })
  email: string;

  @ApiProperty({ example: '1234myMail' })
  @IsNotEmpty()
  @Column({ type: 'string' })
  password: string;

  @ApiProperty({ example: '["baby spinachs salad", "blossh burger"]' })
  @Column()
  recipes: string[];

  @ApiProperty({ example: 'true' })
  @IsOptional()
  @Column()
  isAdmin: boolean;

  // TODO: possibly allow various types of users
  @ApiProperty({ example: 'user' })
  @IsOptional()
  @Column({ default: 'user' })
  role: string;

  // array to push every user the recipes
  // @ApiProperty({ type: [Object] })
  // @Column()
  // myRecipes: object[];

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
