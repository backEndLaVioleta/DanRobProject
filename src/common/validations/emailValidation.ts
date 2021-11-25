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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async validate(email: any, _args: ValidationArguments) {
    try {
      const user = await this.userService.findOneByEmail(email);
      let myBoolean = false;
      user ? myBoolean : (myBoolean = true);
      return myBoolean;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
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
