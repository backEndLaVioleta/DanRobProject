import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('users')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('/register')
  async create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  @Roles(true)
  async login(@Body() body: UserDto) {
    return this.authService.login(body);
  }

  @Get('/all')
  async findAll() {
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
