import { Body, Controller, HttpStatus, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginCmd } from './cmd/auth.cmd';
import { Customer } from '../customer/customer.entity';
import { PasswordResetCmd } from './cmd/password.reset.cmd';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(@Body() customer: LoginCmd): Promise<any> {
    const user = await this.authService.validateUser(customer);
    return await this.authService.createToken(user);
  }
  @Put('reset-password')
  public async resetPassword(@Body() data: PasswordResetCmd): Promise<object> {
    const customer = await this.authService.resetPassword(data);
    if (customer) {
      return { message: 'Password updated successfully' };
    }
  }
}
