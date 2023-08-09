import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Customer } from './customer.entity';
// import { Hash } from '../utils/hash';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  public async register(customer: Customer): Promise<any> {
    try {
      return await this.customerRepository.save(customer);
    } catch (error) {
      throw new HttpException('Email already exist.', HttpStatus.FORBIDDEN);
    }
  }

  public async findCustomerByEmail(
    params: DeepPartial<Customer>,
  ): Promise<Customer> {
    let customer: Customer;
    try {
      customer = await this.customerRepository.findOne(params);
    } catch (error) {}
    if (!customer) {
      throw new NotFoundException(
        `User with ${JSON.stringify(params)} does not exist`,
      );
    }
    return customer;
  }

  public async updateCustomer(
    customer_id: number,
    payload: Customer,
  ): Promise<Customer> {
    const customer = await this.findById({ customer_id });
    // payload.password = await Hash.make(payload.password);
    payload.password = payload.password;
    const newData = {
       ...customer,
      password: payload.password,
      phone: payload.phone,
      country: payload.country,
      state: payload.state,
      city: payload.city,
      default_address: payload.default_address,
      status: payload.status,
    };
    try {
      return this.customerRepository.save(newData);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  public async findById(params: DeepPartial<Customer>): Promise<Customer> {
    let customer: Customer;
    try {
      customer = await this.customerRepository.findOne(params);
    } catch (error) {}
    if (!customer) {
      throw new NotFoundException(
        `User with ${JSON.stringify(params)} does not exist`,
      );
    }
    return customer;
  }

  public async getAllCustomers(): Promise<Customer[]> {
    let customer: Customer[];
    try {
      customer = await this.customerRepository.find();
    } catch (error) {}
    if (!customer) {
      throw new NotFoundException('Something went wrong');
    }
    return customer;
  }

}
