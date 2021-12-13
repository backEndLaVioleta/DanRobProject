import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import {
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(createUserDto: CreateUserDto): Promise<User> {
    const { firstName, lastName, email, password } = createUserDto;

    const user = this.create();
    user.id = uuid();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = await this.hashPassword(password);
    user.isAdmin = false;

    try {
      return await this.save(user);
    } catch (error) {
      //! Duplicate email error code 11000 from monogodb
      if (error.code === 11000) {
        throw new ConflictException('Email already exists');
      }
      throw new InternalServerErrorException();
    }
  }

  async signIn(email: string, password: string): Promise<User> {
    const user = await this.findOne({ email });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user && (await this.validateUserPassword(password, user.password))) {
      return user;
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  private async validateUserPassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
