import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { UsersService } from 'src/users/users.service';
export declare class UserAlreadyExistConstraint implements ValidatorConstraintInterface {
    private userService;
    constructor(userService: UsersService);
    validate(email: string | any): Promise<boolean>;
    defaultMessage(_args: ValidationArguments): string;
}
export declare function UserAlreadyExist(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
