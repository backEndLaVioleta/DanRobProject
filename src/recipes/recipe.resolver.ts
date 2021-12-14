import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RecipeType } from './recipe.type';
import { RecipesService } from './recipes.service';

@Resolver((of) => RecipeType)
export class RecipesResolver {
  constructor(private recipesService: RecipesService) {}

  @Query((returns) => [RecipeType])
  async recipes() {
    return this.recipesService.findAll();
  }
}
