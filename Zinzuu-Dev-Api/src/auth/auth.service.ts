import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
// import { Hash } from '../utils/hash';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginCmd } from './cmd/auth.cmd';
import { CustomerService } from '../customer/customer.service';
import { Customer } from '../customer/customer.entity';
import { config } from '../config/config';
import { PasswordResetCmd } from './cmd/password.reset.cmd';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly customerService: CustomerService,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}
  
  async validateUser(customer: LoginCmd): Promise<any> {
    const cust = await this.customerService.findCustomerByEmail({
      email: customer.email,
    });
    // if (!cust || !(await Hash.compare(customer.password, cust.password))) {
    // if (!cust || !(customer.password == cust.password)) {
    //   throw new UnauthorizedException('Incorrect Email or Password.');
    // }
    if (!cust ) {
      throw new UnauthorizedException('Incorrect Username.');
    }
    return cust;
  }

  async createToken(customer: Customer): Promise<any> {
    return {
      expiresIn: config.jwt.expiry,
      accessToken: this.jwtService.sign({ id: customer.customer_id }),
      customer,
    };
  }

  async resetPassword(data: PasswordResetCmd): Promise<any> {
    const cust = await this.customerService.findCustomerByEmail({
      email: data.email,
    });
    if (!cust) {
      throw new UnauthorizedException(
        'Customer with this email does not exist.',
      );
    }
    const newObj = { ...cust, password: data.password };
    return this.customerRepository.save(newObj);
   
  }
}
