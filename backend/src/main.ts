import { NestFactory } from '@nestjs/core';
import { User } from 'shared/type/user';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

const user: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
};

console.log(user);

bootstrap();
