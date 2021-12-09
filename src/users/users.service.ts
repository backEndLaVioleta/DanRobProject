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
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(body: CreateUserDto) {
    const users = await this.findOneByEmail(body.email);
    if (users) {
      throw new BadRequestException('Email already in use');
    }
    const user = this.userRepository.create(body);

    return await this.userRepository.save(user);
  }
  async findAll() {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new HttpExceptionFilter();
    }
  }
  /* async findAll(order: number, limit: number) {
    console.log(`my oder: ${order}, my limit: ${limit}`);
    try {
      const sort = order ? 'ASC' : 'DESC';
      return await this.userRepository.find({
        order: { firstName: sort },
        take: limit,
      });
    } catch (error) {
      throw new HttpExceptionFilter();
    }
  } */

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
      console.log('from service: ', await this.userRepository.find({ email }));
      const user = await this.userRepository.findOne({ email });
      return user;
    } else throw new BadRequestException('Not proper email format');
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (!ObjectID.isValid(id)) {
      throw new BadRequestException('Invalid id');
    }
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    Object.assign(user, updateUserDto);

    return this.userRepository.save(user);
  }

  async remove(id: string) {
    if (!ObjectID.isValid(id)) {
      throw new BadRequestException('Invalid id');
    }
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return this.userRepository.remove(user);
  }
}
