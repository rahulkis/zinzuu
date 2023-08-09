import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class TrackerRegisterCmd {
  @ApiProperty() @IsNotEmpty() partner_id: number;
  @ApiProperty() @IsNotEmpty() host: string;
  @ApiProperty() platform: string;
  @ApiProperty() @IsNotEmpty() google_analytics: string;
  @ApiProperty() payload: string;
  @ApiProperty() date_created: Date;
}
