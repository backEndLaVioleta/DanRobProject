import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import Encryptation from 'src/common/encrytation.helper';
import { UsersService } from 'src/users/users.service';
import LoginUserDto from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<string | any> {
    console.log(email, pass);
    const user = await this.userService.findOneByEmail(email);
    console.log(user);
    if (!user) return null;
    console.log(`${pass} must be equal as ${user.password}`);
    const isValidPassword = await Encryptation.comparePassword(
      pass,
      user.password,
    );
    console.log(isValidPassword);
    if (isValidPassword) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, email, ...result } = user;
      console.log(result);
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
