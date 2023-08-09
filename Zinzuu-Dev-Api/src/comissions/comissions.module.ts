import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComissionsController } from './comissions.controller';
import { ComissionsService } from './comissions.service';
import { CustomComissions } from './entity/custom.comissions.entity';
import { GlobalComissions } from './entity/global.comission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GlobalComissions,CustomComissions])],
  controllers: [ComissionsController],
  providers: [ComissionsService]
})
export class ComissionsModule {}
