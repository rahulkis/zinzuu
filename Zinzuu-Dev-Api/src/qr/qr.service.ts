import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QR } from './qr.entity';
import { TrackedQr } from './qr.tracking.entity';

@Injectable()
export class QrService {
  constructor(
    @InjectRepository(QR)
    private readonly qrRepository: Repository<QR>,
    @InjectRepository(TrackedQr)
    private readonly trackQrRepository: Repository<TrackedQr>,
  ) {}

  public async addQr(qr: any) {
    try {
      return await this.qrRepository.save(qr);
    } catch (error) {
      throw new HttpException(ForbiddenException, HttpStatus.FORBIDDEN);
    }
  }

  public async getQrList(): Promise<any> {
    try {
      return this.qrRepository.find();
    } catch (error) {
      throw new HttpException(NotFoundException, HttpStatus.NOT_FOUND);
    }
  }

  public async trackQr(id: string): Promise<any> {
    try {
      const data = await this.qrRepository.findOne({ unique_code: id });
      if (!data) {
        throw new NotFoundException(`No data found with this tracking Id`);
      }
      const newObj = {
        type: data.type,
        code: data.unique_code,
      };
      return await this.trackQrRepository.save(newObj);
    } catch (err) {
      throw new HttpException(err, HttpStatus.NOT_FOUND);
    }
  }
}
