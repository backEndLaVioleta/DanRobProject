import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

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

  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
