import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    const users = await this.userRepository.find({ email: body.email });
    if (users.length) {
      throw new BadRequestException('Email already in use');
    }
    const user = this.userRepository.create(body);

    return await this.userRepository.save(user);
  }

  async findAll() {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new HttpException('List not available.', HttpStatus.BAD_REQUEST);
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
      throw new HttpException('List not available.', HttpStatus.BAD_REQUEST);
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
    } else
      throw new HttpException(
        'Not proper email format',
        HttpStatus.BAD_REQUEST,
      );
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
      throw new NotFoundException('User not found');
    }
    return this.userRepository.remove(user);
  }
}
