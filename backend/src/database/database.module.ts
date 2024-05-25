import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '../config/config.service';

const dbConnectionString = ConfigService.getMongoConnectionString();

@Module({
  imports: [MongooseModule.forRoot(dbConnectionString)],
})
export class DatabaseModule {}
