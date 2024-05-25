import { IsNumber, IsString } from 'class-validator';

export class EnvConfig {
    @IsNumber()
    PORT: number;

    @IsString()
    DATABASE_URL: string;
}
