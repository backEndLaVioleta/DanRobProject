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
import { Serialize } from '../interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';

@Controller('users')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('/register')
  async signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = await this.authService.signUp(createUserDto);
    return user;
  }

  @Post('/login')
  async signIn(
    @Body() loginUserDto: LoginUserDto,
  ): Promise<{ access_token: string }> {
    return await this.authService.signIn(loginUserDto);
  }

  @Post('/whoami')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    //! @GetUser() -> decorator that returns the user from the request
    console.log('from test()', user);

    return user;
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
