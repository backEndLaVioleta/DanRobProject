import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from 'src/users/entities/user.entity';
import { LoginUserDto } from '../dto/login.dto';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const roles = this.reflector.get<boolean>('roles', context.getHandler());
    console.log(`from roles guard roles equals: ${roles}`);
    if (roles == false) {
      return true;
    }
    // doesn't get the user at all!!
    const { user }: { user: LoginUserDto } = context
      .switchToHttp()
      .getRequest();
    console.log(user.isAdmin, 'must show me true');
    if (user.isAdmin == roles) {
      const myRole = roles;
      return Promise.resolve(myRole);
    }
  }
}
