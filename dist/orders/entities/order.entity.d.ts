import { ObjectID } from 'typeorm';
export declare class Order {
    id: ObjectID;
    orderDate: Date;
    menuItemId: ObjectID[];
    userId: ObjectID[];
    extra_ingredients: string[];
    removed_ingredients: string[];
    quantity: number;
    totalPrice: number;
    status: 'pending' | 'preparing' | 'ready' | 'delivered';
}
