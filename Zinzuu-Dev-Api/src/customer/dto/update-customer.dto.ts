import { ApiProperty } from '@nestjs/swagger';
import { CustomerStatus } from '../customer.entity';
import { ICustomer } from '../interface/customer.interface';

export class UpdateCustomerDto implements ICustomer {
  constructor(data: ICustomer) {
    this.customer_id = data.customer_id;
    this.customer_type = data.customer_type;
    this.username = data.username;
    this.email = data.email;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.company = data.company;
    this.default_address = data.default_address;
    this.country = data.country;
    this.state = data.state;
    this.city = data.city;
    this.phone = data.phone;
    this.status = data.status;
  }
  @ApiProperty() customer_id: number;
  @ApiProperty() customer_type: string;
  @ApiProperty() username: string;
  @ApiProperty() email: string;
  @ApiProperty() firstname: string;
  @ApiProperty() lastname: string;
  @ApiProperty() company: string;
  @ApiProperty() default_address: string;
  @ApiProperty() country: string;
  @ApiProperty() state: string;
  @ApiProperty() city: string;
  @ApiProperty() phone: string;
  @ApiProperty() status: CustomerStatus;
}
