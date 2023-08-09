import { ApiProperty } from '@nestjs/swagger';
import { CustomerStatus } from '../customer.entity';
import { IsEmail, IsNotEmpty } from 'class-validator';
export class UpdateCustomerCmd {
  @ApiProperty() customer_id: number;
  @ApiProperty() customer_type: string;
  @ApiProperty() username: string;
  @ApiProperty() @IsNotEmpty() password: string;
  @ApiProperty()  email: string;
  @ApiProperty() firstname: string;
  @ApiProperty() lastname: string;
  @ApiProperty() company: string;
  @ApiProperty() @IsNotEmpty() default_address: string;
  @ApiProperty() @IsNotEmpty() phone: string;
  @ApiProperty() @IsNotEmpty() country: string;
  @ApiProperty() @IsNotEmpty() state: string;
  @ApiProperty() @IsNotEmpty() city: string;
  @ApiProperty() @IsNotEmpty() status: CustomerStatus;
}
