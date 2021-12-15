import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { isEmail } from 'class-validator';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { AuthService } from '../auth/auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { AccessTokenType } from '../auth/access-token.type';

@Injectable()
export class UsersService {
  private logger = new Logger('UsersService');
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private authService: AuthService,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.signUp(createUserDto);
    return user;
  }

  async signIn(loginUserDto: LoginUserDto): Promise<AccessTokenType> {
    return await this.authService.signIn(loginUserDto);
  }

  async findAll() {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new HttpException('List not available.', HttpStatus.BAD_REQUEST);
    }
  }

  async findOneById(id: string) {
    const user = await this.userRepository.findOne({ id });
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

  async assignRecipeToUser(userId: string, recipeIds: string[]): Promise<User> {
    const user = await this.userRepository.findOne({ id: userId });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    user.recipes = [...user.recipes, ...recipeIds];

    await this.userRepository.save(user);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    Object.assign(user, updateUserDto);

    return this.userRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne({ id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    this.userRepository.remove(user);
    return user;
  }
}
