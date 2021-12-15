import { ApiProperty } from '@nestjs/swagger';
import { Recipe } from 'src/recipes/entities/recipe.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
export class Order {
  @ApiProperty({ example: 'as-1234h73' })
  @ObjectIdColumn()
  id: ObjectID;
  @CreateDateColumn() recipeOrder: Date;

  // users
  @ApiProperty({ example: 'as-1234h73' })
  @ManyToOne(() => User, (user) => user._id)
  @JoinColumn()
  user: User;

  // recipes
  @ApiProperty({ example: 'as-1234h73' })
  @ManyToOne(() => Recipe, (recipe) => recipe._id)
  @JoinColumn()
  recipe: Recipe;

  // @CreateDateColumn() orderDate: Date;
  // @Column() menuItemId: ObjectID[] = [];
  // @Column() userId: ObjectID[] = [];
  // @Column() extra_ingredients: string[] = [];
  // @Column() removed_ingredients: string[] = [];
  // @Column() quantity: number;
  // @Column() totalPrice: number;
  @ApiProperty({ example: 'pending' })
  @Column({ type: 'enum' })
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
}
