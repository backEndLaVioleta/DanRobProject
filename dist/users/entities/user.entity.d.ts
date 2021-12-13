import { ObjectID, BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    _id: ObjectID;
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isAdmin: boolean;
    createdDate: Date;
    updatedDate: Date;
    logInsert(): void;
    logUpdate(): void;
}
