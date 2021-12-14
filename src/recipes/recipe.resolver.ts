import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { RecipeType } from './recipe.type';
import { RecipesService } from './recipes.service';

@Resolver((of) => RecipeType)
export class RecipesResolver {
  constructor(private recipesService: RecipesService) {}

  @Query((returns) => [RecipeType])
  async recipes() {
    return this.recipesService.findAll();
  }

  @Query((returns) => RecipeType)
  async recipe(@Args('id') id: string) {
    return await this.recipesService.findOneById(id);
  }

  @Mutation((returns) => RecipeType)
  async saveRecipe(@Args('createRecipeDto') createRecipeDto: CreateRecipeDto) {
    return this.recipesService.saveRecipe(createRecipeDto);
  }

  @Mutation((returns) => RecipeType)
  async updateRecipe(
    @Args('id') id: string,
    @Args('updateRecipeDto') updateRecipeDto: UpdateRecipeDto,
  ) {
    return await this.recipesService.updateRecipe(id, updateRecipeDto);
  }

  @Mutation((returns) => RecipeType)
  async deleteRecipe(@Args('id') id: string) {
    return await this.recipesService.removeRecipe(id);
  }
}
