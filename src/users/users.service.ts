import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { isEmail } from 'class-validator';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(body: CreateUserDto) {
    const users = await this.findOneByEmail(body.email);
    if (users.length) {
      throw new BadRequestException('Email already in use');
    }
    const user = this.userRepository.create(body);

    return this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOneById(id: string) {
    if (ObjectID.isValid(id)) {
      const user = await this.userRepository.findOne(id);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } else throw new BadRequestException('Invalid id');
  }

  async findOneByEmail(email: string) {
    if (isEmail(email)) {
      return await this.userRepository.find({ email });
    } else throw new BadRequestException('Not proper email format');
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    Object.assign(user, updateUserDto);

    return this.userRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return this.userRepository.remove(user);
  }
}
