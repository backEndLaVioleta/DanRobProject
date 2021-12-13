import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);

  // config swagger
  const configSwagger = new DocumentBuilder()
    .setTitle('Blossh Recipes')
    .setDescription('Dan & Rob Api and MongoDB')
    .setVersion('1.0')
    .addTag('Hospitality App')
    .build();

  const docSwagger = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('test', app, docSwagger);
  try {
    const port = process.env.PORT;
    await app.listen(port, () => {
      logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
    });
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

bootstrap();
