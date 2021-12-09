import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
//import { AuthService } from 'src/auth/auth.service';
//import LoginUserDto from 'src/auth/dto/login.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('all')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
  /* @Get()
  async findAll(@Body() findAllUsersDto: FindAllUsersDto) {
    console.log(findAllUsersDto.order, findAllUsersDto.limit);
    return this.usersService.findAll(
      findAllUsersDto.order,
      findAllUsersDto.limit,
    );
  } */

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    return this.usersService.findOneById(id);
  }

  @Get(':email')
  async findOneByEmail(@Param('email') email: string) {
    return this.usersService.findOneByEmail(email);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
