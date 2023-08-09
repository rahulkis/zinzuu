import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ICustomer } from '../interface/customer.interface';

export enum CustomerType {
  NEW_CUSTOMER = 'new ',
  FUTURE_CUSTOMER = 'future ',
}
export enum CustomerRole {
  USER = 'user ',
}

export enum CustomerStatus {
  PENDING = 'pending',
  CONFIRM = 'confirm',
}

@Entity()
export class Customer implements ICustomer {
  constructor(data: ICustomer) {
    if (!!data) {
      this.customer_id = data.customer_id;
      this.customer_type = data.customer_type;
      this.username = data.username;
      this.password = data.password;
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
  }

  @PrimaryGeneratedColumn() public customer_id: number;
  @Column() public customer_type: string;
  @Column() public username: string;
  @Column() public password: string;
  @Column({ unique: true }) public email: string;
  @Column() public firstname: string;
  @Column() public lastname: string;
  @Column() public company: string;
  @Column() public default_address: string;
  @Column() public country: string;
  @Column() public state: string;
  @Column() public city: string;
  @Column() public phone: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public datetime_added: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public datetime_modified: Date;
  @Column() public status: CustomerStatus;
}
