import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { ReceiptsModule } from './receipts/receipts.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { PartnerModule } from './modules/partner/partner.module';
import { QrModule } from './qr/qr.module';

import { TrackerModule } from './tracker/tracker.module';
import { TemplatesModule } from './templates/templates.module';
import{LogsModule} from './smslogs/logs.module'
import { ComissionsModule } from './comissions/comissions.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'zinzuudb.cndh7glz1x7n.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'fRGAOvI0Sn9dKNKZIO9q',
      database: 'zinzuudev',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CustomerModule,
    ReceiptsModule,
    AuthModule,
    ProductsModule,
    PartnerModule,
    QrModule,
    TrackerModule,
    TemplatesModule,
    LogsModule,
    ComissionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
