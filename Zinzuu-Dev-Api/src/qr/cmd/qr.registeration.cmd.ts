import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class RegisterQrCmd {
  @ApiProperty() @IsNotEmpty() customer_id: string;
  @ApiProperty() @IsNotEmpty() name: string;
  @ApiProperty() @IsNotEmpty() qr_data: string;
  @ApiProperty() @IsNotEmpty() qr_image: string;
  @ApiProperty() unique_code: string;
  @ApiProperty() @IsNotEmpty() type: string;
  @ApiProperty() discount: number;
  @ApiProperty() expiry_date: string;
}
