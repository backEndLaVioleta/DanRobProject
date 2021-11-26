import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import UserAlreadyExistConstraint from 'src/common/validations/emailValidation';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UserAlreadyExistConstraint],
  exports: [UsersService],
})
export class UsersModule {}
