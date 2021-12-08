import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
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

  async create(createUserDto: CreateUserDto) {
    const user = new User();
    Object.assign(user, createUserDto);

    const repeatedUser = await this.findOneByEmail(user.email);
    if (!repeatedUser) {
      return await this.userRepository.save(user);
    } else throw new BadRequestException('User already exist.');
    // return await this.userRepository.save(user);
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
    const user = await this.userRepository.findOne(id);

    if (ObjectID.isValid(id)) {
      return user;
    } else throw new BadRequestException('User does not exist.');
  }

  async findOneByEmail(mail: string) {
    if (isEmail(mail)) {
      return await this.userRepository.findOne({ email: mail });
    } else throw new BadRequestException('Not proper email format');
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne(id);
    Object.assign(user, updateUserDto);

    return await this.userRepository.save(user);
  }

  async remove(id: string) {
    const dbUser = await this.userRepository.findOne(id);

    if (dbUser) {
      await this.userRepository.delete(id);
      return;
    } else throw new BadRequestException('User does not exist.');
  }
}
