import {Logger, ValidationPipe} from "@nestjs/common";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));

  const config = ConfigService.loadConfig();

  await app.listen(config.APP_PORT);
  Logger.log(
      `🚀 Application is running on: http://localhost:${config.APP_PORT}/${globalPrefix}`,
  );
}

bootstrap();
