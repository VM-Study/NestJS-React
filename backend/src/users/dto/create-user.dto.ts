import { IsEmail, IsNumber, IsString, Length } from 'class-validator';
import { USER } from '../entity/user.constant';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  @Length(USER.NAME.MIN, USER.NAME.MAX)
  public name: string;

  @IsNumber()
  public age: number;
}
