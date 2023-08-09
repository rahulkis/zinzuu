import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scanned_Receipts } from './receipt.entity';

@Injectable()
export class ReceiptsService {
  constructor(
    @InjectRepository(Scanned_Receipts)
    private readonly receiptRepository: Repository<Scanned_Receipts>,
  ) { }
  public async uploadReceipt(receipt: Scanned_Receipts): Promise<any> {
    try {
      return await this.receiptRepository.save(receipt);
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
