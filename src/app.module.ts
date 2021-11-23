/* eslint-disable */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { RecipesModule } from './recipes/recipes.module';
import { MenusModule } from './menus/menus.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_CONNECTION_STRING,
      database: process.env.MONGODB_DATABASE,
      entities: [join(__dirname, '/../**/**.entity{.ts}')],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    RecipesModule,
    MenusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
