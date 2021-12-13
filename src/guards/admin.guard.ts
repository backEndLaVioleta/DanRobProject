import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(request.user);
    console.log('user isadmin', request.user.isAdmin);
    if (!request.user || !request.user.isAdmin) {
      return false;
    }

    return request.user.isAdmin;
  }
}
