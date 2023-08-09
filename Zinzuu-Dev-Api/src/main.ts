import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  const swaggerBaseConfig = new DocumentBuilder()
    .setTitle('Zinzuu')
    .setDescription('Zinzuu Dev Api')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerBaseConfig);
  SwaggerModule.setup('api', app, swaggerDocument);
  await app.listen(config.port);
  Logger.log(`the server is running on localhost: ${config.port}`, 'BootStrap');
}
bootstrap();
