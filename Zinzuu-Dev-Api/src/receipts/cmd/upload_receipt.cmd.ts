import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class ReceiptUploadCmd {
  @ApiProperty() customer_id: number;
  @ApiProperty() @IsNotEmpty() ocr_data: string;
  @ApiProperty() @IsNotEmpty() image_link: string;
}
