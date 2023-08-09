import { ApiProperty } from '@nestjs/swagger';
import { IReceipt } from '../interface/receipt.interface';

export class UploadReceiptDto implements IReceipt {
  constructor(data: IReceipt) {
    this.customer_id = data.customer_id;
    this.ocr_data = data.ocr_data;
    this.image_link = data.image_link;
  }
  @ApiProperty() customer_id: number;
  @ApiProperty() ocr_data: string;
  @ApiProperty() image_link: string;
}
