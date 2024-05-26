import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { USER } from '../entity/user.constant';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  public email?: string;

  @IsOptional()
  @IsString()
  @Length(USER.NAME.MIN, USER.NAME.MAX)
  public name?: string;

  @IsOptional()
  @IsNumber()
  public age?: number;
}
