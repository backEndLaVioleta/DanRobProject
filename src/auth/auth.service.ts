import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import Encryptation from 'src/common/encrytation.helper';
import { UsersService } from 'src/users/users.service';
import LoginUserDto from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject(forwardRef(() => UsersService))
    private userService: UsersService,
  ) {}

  async validateUser(email: string, pass: string): Promise<string | any> {
    console.log(email, pass);
    const user = await this.userService.findOneByEmail(email);
    console.log(user);
    if (!user) return null;
    const isValidPassword = await Encryptation.comparePassword(
      pass,
      user.password,
    );

    if (isValidPassword) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, email, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginUserDto) {
    console.log(user);
    const payload = { email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
