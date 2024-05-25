import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import * as dotenv from 'dotenv';
import { EnvConfig } from './env.validation';

export class ConfigService {
  private static config: EnvConfig;

  public static loadConfig(): EnvConfig {
    dotenv.config({ path: 'server.env' });

    const config = plainToInstance(EnvConfig, process.env, {
      enableImplicitConversion: true,
    });
    const errors = validateSync(config);
    if (errors.length > 0) {
      throw new Error(`Config validation error: ${errors.toString()}`);
    }

    this.config = config;
    return config;
  }

  public static getConfig(): EnvConfig {
    if (!this.config) {
      this.loadConfig();
    }
    return this.config;
  }

  public static getMongoConnectionString(): string {
    const {
      MONGO_HOST,
      MONGO_PORT,
      MONGO_DB,
      MONGO_USER,
      MONGO_PASSWORD,
      MONGO_AUTH_BASE,
    } = this.getConfig();

    return `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=${MONGO_AUTH_BASE}`;
  }
}
