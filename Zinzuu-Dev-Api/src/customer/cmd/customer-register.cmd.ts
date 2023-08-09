import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
export class CustomerRegisterCmd {
  @ApiProperty() @IsEmail() readonly email: string;
  @ApiProperty() @IsNotEmpty() firstname: string;
  @ApiProperty() @IsNotEmpty() lastname: string;
  @ApiProperty() @IsNotEmpty() customer_type: string;
}
