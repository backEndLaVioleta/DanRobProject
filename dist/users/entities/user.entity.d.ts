import { ObjectID } from 'typeorm';
export declare class User {
    id: ObjectID;
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isAdmin: boolean;
    createdDate: Date;
    updatedDate: Date;
    hashPassword(): Promise<void>;
    assignRole(): Promise<void>;
    logInsert(): void;
    logUpdate(): void;
}
