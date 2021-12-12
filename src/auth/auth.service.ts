import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Encryptation } from '../common/utilities/encryptation.helper';
import { UserDto } from '../users/dto/user.dto';
import { UsersService } from '../users/users.service';
// import { LoginUserDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    // @Inject(forwardRef(() => UsersService))
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.userService.findOneByEmail(email);
    console.log('from authService:', user);
    if (!user) return null;
    const isValidPassword = await Encryptation.comparePassword(
      pass,
      user.password,
    );
    if (isValidPassword) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: UserDto) {
    const payload = { email: user.email, role: user.isAdmin };
    const token = this.jwtService.sign(payload);
    return {
      access_token: token,
    };
  }
}
