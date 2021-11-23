import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ConfigModule } from '@nestjs/config';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
      imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
          type: 'mongodb',
          url: process.env.MONGODB_CONNECTION_STRING,
          database: process.env.MONGODB_DATABASE,
          entities: ['./**/entities/*.js'],
          ssl: true,
          useUnifiedTopology: true,
          useNewUrlParser: true,
          autoLoadEntities: true,
        }),
        TypeOrmModule.forFeature([User]),
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
