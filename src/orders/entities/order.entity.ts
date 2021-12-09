import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
export class Order {
  @ObjectIdColumn() id: ObjectID;
  @CreateDateColumn() orderDate: Date;
  @Column() menuItemId: ObjectID[] = [];
  @Column() userId: ObjectID[] = [];
  @Column() extra_ingredients: string[] = [];
  @Column() removed_ingredients: string[] = [];
  @Column() quantity: number;
  @Column() totalPrice: number;
  @Column()
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
}
