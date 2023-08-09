import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class TrackQrCmd {
  @ApiProperty() @IsNotEmpty() customer_id: string;
  @ApiProperty() @IsNotEmpty() code: string;
  @ApiProperty() @IsNotEmpty() type: string;
}
