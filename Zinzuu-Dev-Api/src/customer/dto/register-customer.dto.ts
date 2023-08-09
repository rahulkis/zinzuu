import { ApiProperty } from '@nestjs/swagger';
import { CustomerStatus } from '../customer.entity';
import { ICustomer } from '../interface/customer.interface';

export class RegisterCustomerDto implements ICustomer {
  constructor(data: ICustomer) {
    this.email = data.email;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.email = data.email;
    this.customer_type = data.customer_type;
    this.status = data.status;
  }
  @ApiProperty() email: string;
  @ApiProperty() firstname: string;
  @ApiProperty() lastname: string;
  @ApiProperty() customer_type: string;
  @ApiProperty() status: CustomerStatus;
}
