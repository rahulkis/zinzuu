import { ApiProperty } from '@nestjs/swagger';
import { ICustomer } from '../interface/customer.interface';

export class CustomerRegisterCmd implements ICustomer {
  constructor(data: ICustomer) {
    this.email = data.email;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
  }
  @ApiProperty() email: string;
  @ApiProperty() firstname: string;
  @ApiProperty() lastname: string;
}
