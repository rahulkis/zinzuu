import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginCmd {
  @ApiProperty()  @IsEmail() readonly email: string;
  // @ApiProperty() @IsNotEmpty() readonly password: string;
}
