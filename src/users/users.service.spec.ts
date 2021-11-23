import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
