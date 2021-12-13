import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);
    console.log('from validate local jwt', user);
    // if (!user) throw new Error('User not in the db');
    if (!user)
      throw new UnauthorizedException({
        statusCode: 401,
        message: 'Unauthorized',
        error: 'User not in the db',
      });

    return user;
  }
}
