import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { RecipeRepository } from './recipe.repository';
import { RecipesResolver } from './recipe.resolver';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([RecipeRepository])],
  controllers: [RecipesController],
  providers: [RecipesService, RecipesResolver],
  exports: [RecipesService],
})
export class RecipesModule {}
