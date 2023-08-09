import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class PasswordResetCmd {
  @ApiProperty()  @IsEmail() readonly email: string;
  @ApiProperty() @IsNotEmpty() readonly password: string;
}