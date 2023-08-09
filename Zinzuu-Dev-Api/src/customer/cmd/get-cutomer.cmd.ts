import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class GetCustomerCmd {
  @ApiProperty() @IsEmail() readonly email: string;
}
