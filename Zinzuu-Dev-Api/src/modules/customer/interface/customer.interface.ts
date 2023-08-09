import { CustomerStatus } from '../entity/customer.entity';

export interface ICustomer {
  readonly customer_id?: number;
  readonly customer_type?: string;
  readonly username?: string;
  readonly password?: string;
  readonly email?: string;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly company?: string;
  readonly default_address?: string;
  readonly phone?: string;
  readonly country?: string;
  readonly state?: string;
  readonly city?: string;
  readonly datetime_added?: Date;
  readonly datetime_modified?: Date;
  readonly status?: CustomerStatus;
}
