import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsersService } from 'src/users/users.service';

// first try
@ValidatorConstraint({ async: true })
export class UserAlreadyExistConstraint
  implements ValidatorConstraintInterface
{
  constructor(private userService: UsersService) {}

  async validate(email: string | any) {
    try {
      const user = await this.userService.findOneByEmail(email);
      // let myBoolean = false;
      if (user) return false;
      return true;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultMessage(_args: ValidationArguments) {
    return 'User already exist';
  }
}

export function UserAlreadyExist(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: UserAlreadyExistConstraint,
    });
  };
}
