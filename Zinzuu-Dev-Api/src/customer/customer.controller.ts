import {
  Body,
  Controller,
  Post,
  HttpStatus,
  Get,
  Put,
  Param,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerRegisterCmd } from './cmd/customer-register.cmd';
import { RegisterCustomerDto } from './dto/register-customer.dto';
import { GetCustomerDto, GetAllCustomerDto } from './dto/get-customer.dto';
import { GetCustomerCmd } from './cmd/get-cutomer.cmd';
import { Customer } from './customer.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateCustomerCmd } from './cmd/update-customer.cmd';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('register')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: RegisterCustomerDto,
  })
  @ApiResponse({ description: 'Bad request.', status: HttpStatus.BAD_REQUEST })
  public async register(
    @Body() customer: CustomerRegisterCmd,
  ): Promise<RegisterCustomerDto> {
    return await this.customerService.register(new Customer(customer));
  }

  @Post('get')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: GetCustomerDto,
  })
  @ApiResponse({ description: 'Not Found.', status: HttpStatus.NOT_FOUND })
  public async findCustomer(
    @Body() customer: GetCustomerCmd,
  ): Promise<GetCustomerDto> {
    const cust = await this.customerService.findCustomerByEmail(customer);
    return new GetCustomerDto(cust);
  }

  @Post('get/all')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: GetAllCustomerDto,
  })
  @ApiResponse({ description: 'Not Found.', status: HttpStatus.NOT_FOUND })
  public async getCustomer(): Promise<GetAllCustomerDto> {
    const getAllCustomerDto = new GetAllCustomerDto();
    getAllCustomerDto.customerList = await this.customerService.getAllCustomers();
    return getAllCustomerDto;
  }

  @Put('update/:id')
  public async updateCustomer(
    @Param('id') id: number,
    @Body() customer: UpdateCustomerCmd,
  ): Promise<UpdateCustomerDto> {
    const updatedCustomer = await this.customerService.updateCustomer(
      id,
      new Customer(customer),
    );
    return new UpdateCustomerDto(updatedCustomer);
  }
}
