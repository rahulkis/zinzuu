import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsController } from './logs.controller';
import { EmailLogs, SMSLogs } from './logs.entity';
import { LogsService } from './logs.service';

@Module({
  imports: [TypeOrmModule.forFeature([SMSLogs,EmailLogs])],
  controllers: [LogsController],
  providers: [LogsService]
})
export class LogsModule {}
