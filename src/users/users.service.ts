import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    const users = await this.userRepository.find({ email: body.email });
    if (users.length > 0) {
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
    const user = await this.userRepository.findOne({ userId: id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findOneByEmail(email: string) {
    if (isEmail(email)) {
      const user = await this.userRepository.findOne({ email });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } else throw new BadRequestException('Not proper email format');
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ userId: id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    Object.assign(user, updateUserDto);

    return this.userRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne({ userId: id });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return this.userRepository.remove(user);
  }
}
