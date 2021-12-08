import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import LoginUserDto from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<string | any> {
    console.log(email, pass);
    const user = await this.userService.findOneByEmail(email);
    console.log(user);
    let myResponse: any;
    user ? (myResponse = user) : (myResponse = null);
    console.log(myResponse);
    return myResponse;
  }

  async login(user: LoginUserDto) {
    console.log(user);
    const payload = { email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
