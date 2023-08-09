import { Module } from '@nestjs/common';
import { PartnerController } from './partner.controller';
import { PartnerService } from './partner.service';
import { Partner } from './entity/partner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from './entity/roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Partner, Roles])],
  controllers: [PartnerController],
  providers: [PartnerService],
  exports: [PartnerService],
})
export class PartnerModule {}
