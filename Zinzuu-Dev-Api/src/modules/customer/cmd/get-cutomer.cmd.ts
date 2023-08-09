import { ApiProperty } from '@nestjs/swagger';
import { ICustomer } from '../interface/customer.interface';

export class GetCustomerCmd implements ICustomer {
  constructor(data: ICustomer) {
    this.email = data.email;
  }
  @ApiProperty() email: string;
}
