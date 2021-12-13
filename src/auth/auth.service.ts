import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';
import { UserRepository } from '../users/user.repository';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  private logger = new Logger('AuthService');
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    //* with a unique index on email in MongoDB, this check is not needed (saves a query)
    // const users = await this.userRepository.find({
    //   email: createUserDto.email,
    // });
    // if (users.length) {
    //   throw new ConflictException('Email already in use');
    // }
    const user = await this.userRepository.signUp(createUserDto);

    return user;
  }

  async signIn(loginUserDto: LoginUserDto): Promise<{ access_token: string }> {
    const { email, password } = loginUserDto;

    const user = await this.userRepository.signIn(email, password);

    const payload: JwtPayload = {
      email: user.email,
    };
    const access_token = this.jwtService.sign(payload);
    this.logger.debug(
      `Generated JWT Token with payload ${JSON.stringify(payload)}`,
    );

    return { access_token };
  }
}
