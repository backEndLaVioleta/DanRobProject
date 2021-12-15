import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthModule } from '../auth/auth.module';
import { UserResolver } from './user.resolver';
import { RecipesModule } from '../recipes/recipes.module';

@Module({
  imports: [
    AuthModule,
    RecipesModule,
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserResolver],
  exports: [UsersService],
})
export class UsersModule {}
