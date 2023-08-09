import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { CustomerModule } from '../customer/customer.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { config } from '../config/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from '../customer/customer.entity';

@Module({
  imports: [
    CustomerModule,
    PassportModule,
    JwtModule.register({
      secret: config.jwt.secretkey,
      signOptions: { expiresIn: config.jwt.expiry },
    }),
    TypeOrmModule.forFeature([Customer]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [JwtModule],
})
export class AuthModule {}
