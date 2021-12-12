import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';
import { UserRepository } from '../users/user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
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

  async signIn(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    const user = await this.userRepository.signIn(email, password);

    return user;
  }
}
