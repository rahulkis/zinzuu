import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QrController } from './qr.controller';
import { QR } from './qr.entity';
import { QrService } from './qr.service';
import { TrackedQr } from './qr.tracking.entity';

@Module({
  imports:[TypeOrmModule.forFeature([QR,TrackedQr])],
  controllers: [QrController],
  providers: [QrService]
})
export class QrModule {}
