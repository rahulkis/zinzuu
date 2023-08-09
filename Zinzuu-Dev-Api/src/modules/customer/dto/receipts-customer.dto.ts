import { ApiProperty } from '@nestjs/swagger';
import { IReceipts } from '../interface/receipts.interface';

export class ReceiptsCustomerDto implements IReceipts {
  constructor(data: IReceipts) {
    this.id = data.id;
    this.customer_id = data.customer_id;
    this.ocr_data = data.ocr_data;
    this.image_link = data.image_link;
    this.datetime_added = data.datetime_added;
    this.datetime_modified = data.datetime_modified;
  }
  @ApiProperty() id: number;
  @ApiProperty() customer_id: number;
  @ApiProperty() ocr_data: string;
  @ApiProperty() image_link: string;
  @ApiProperty() datetime_added: Date;
  @ApiProperty() datetime_modified: Date;

}
