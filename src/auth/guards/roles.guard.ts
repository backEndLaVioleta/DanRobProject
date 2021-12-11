import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const roles = this.reflector.get<boolean>('roles', context.getHandler());
    console.log(`from roles guard roles equals: ${roles}`);
    if (roles == false) {
      return true;
    }
    const { user }: { user: User } = context.switchToHttp().getRequest();
    console.log(user.isAdmin, 'must show me true');
    if (user.isAdmin == roles.valueOf()) {
      const myRole = roles.valueOf();
      return Promise.resolve(myRole);
    }
  }
}
