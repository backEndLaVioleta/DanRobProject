import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  async create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Get('/all')
  async findAll() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  async findOneById(@Param('id') id: string) {
    return this.usersService.findOneById(id);
  }

  @Get()
  async findByEmail(@Query('email') email: string) {
    return this.usersService.findOneByEmail(email);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(id, body);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
