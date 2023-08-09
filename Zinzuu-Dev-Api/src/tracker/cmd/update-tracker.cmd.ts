import { ApiProperty } from '@nestjs/swagger';
export class UpdateTrackerCmd {
  @ApiProperty() id: number;
  @ApiProperty() partner_id: number;
  @ApiProperty() host: string;
  @ApiProperty() email: string;
  @ApiProperty() platform: string;
  @ApiProperty() google_analytics: string;
  @ApiProperty() payload: string;
  @ApiProperty() date_created: Date;
}
