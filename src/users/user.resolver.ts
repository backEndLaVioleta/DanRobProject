import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AccessTokenType } from '../auth/access-token.type';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserType } from './user.type';
import { UsersService } from './users.service';

@Resolver((of) => UserType)
export class UserResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => [UserType])
  async users() {
    return this.usersService.findAll();
  }

  @Query((returns) => UserType)
  async user(@Args('id') id: string) {
    return this.usersService.findOneById(id);
  }

  @Mutation((returns) => UserType)
  async signUp(@Args('createUserDto') createUserDto: CreateUserDto) {
    return this.usersService.signUp(createUserDto);
  }

  @Mutation((returns) => AccessTokenType)
  async signIn(@Args('loginUserDto') loginUserDto: LoginUserDto) {
    return this.usersService.signIn(loginUserDto);
  }

  @Mutation((returns) => UserType)
  async updateUser(
    @Args('id') id: string,
    @Args('updateUserDto') updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Mutation((returns) => UserType)
  async deleteUser(@Args('id') id: string) {
    return this.usersService.remove(id);
  }
}
