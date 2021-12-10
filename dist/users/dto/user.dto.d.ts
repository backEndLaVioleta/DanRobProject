import { ObjectID } from 'typeorm';
export declare class UserDto {
    userId: ObjectID;
    firstName: string;
    lastName: string;
    email: string;
    createdDate: Date;
    updatedDate: Date;
    isAdmin: boolean;
    access_token: string;
}
