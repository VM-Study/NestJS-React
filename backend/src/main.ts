import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfiguration } from './config/app-configuration.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  const configService = app.get(AppConfiguration);

  await app.listen(configService.appPort);
  Logger.log(
    `🚀 Application is running on: http://localhost:${configService.appPort}/${globalPrefix}`,
  );
}

bootstrap();
