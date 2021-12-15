import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { RecipesService } from '../recipes/recipes.service';
import { AccessTokenType } from '../auth/access-token.type';
import { AssignRecipesToUserInput } from './dto/assign-recipes-to-user.input';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserType } from './user.type';
import { UsersService } from './users.service';

@Resolver((of) => UserType)
export class UserResolver {
  constructor(
    private usersService: UsersService,
    private recipesService: RecipesService,
  ) {}

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
  async assignRecipesToUser(
    @Args('assignRecipesToUserInput')
    assignRecipesToUserInput: AssignRecipesToUserInput,
  ) {
    const { userId, recipeIds } = assignRecipesToUserInput;
    return this.usersService.assignRecipeToUser(userId, recipeIds);
  }

  @Query((returns) => String)
  async mongo() {
    return 'Reliably-Amino-Figurine3-Charter-Parabola-Steerable';
  }

  @Mutation((returns) => UserType)
  async deleteUser(@Args('id') id: string) {
    return this.usersService.remove(id);
  }

  @ResolveField()
  async recipes(@Parent() user: User) {
    return this.recipesService.findManyRecipes(user.recipes);
  }
}
