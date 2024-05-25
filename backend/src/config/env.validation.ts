import {IsNumber, IsString, Min} from 'class-validator';

export class EnvConfig {
    @IsNumber()
    @Min(1)
    APP_PORT: number;

    @IsNumber()
    APP_PASSWORD_SALT_ROUNDS: number;

    @IsString()
    MONGO_DB: string;

    @IsString()
    MONGO_HOST: string;

    @IsNumber()
    @Min(1)
    MONGO_PORT: number;

    @IsString()
    MONGO_USER: string;

    @IsString()
    MONGO_PASSWORD: string;

    @IsString()
    MONGO_AUTH_BASE: string;
}
