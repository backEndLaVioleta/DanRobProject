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
  @ObjectIdColumn() id: ObjectID;
  @CreateDateColumn() recipeOrder: Date;

  // users
  @ManyToOne(() => User, (user) => user._id)
  @JoinColumn()
  user: User;

  // recipes
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
  @Column()
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
}
