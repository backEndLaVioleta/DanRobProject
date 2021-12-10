import { ObjectID } from 'typeorm';
export declare class User {
    id: ObjectID;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    creation?: Date;
    constructor(user?: Partial<User>);
}
