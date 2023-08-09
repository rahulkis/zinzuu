import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { PartnerModule } from './partner/partner.module';

@Module({
  imports : [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "zinzuudb.cndh7glz1x7n.us-east-2.rds.amazonaws.com",
    "port": 3306,
    "username": "admin",
    "password": "fRGAOvI0Sn9dKNKZIO9q",
    "database": "zinzuudev",
    "autoLoadEntities": true,
    "synchronize": true
    }),
    PartnerModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
