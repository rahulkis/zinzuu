import { ApiProperty } from '@nestjs/swagger';
import { ITracker } from '../interface/tracker.interface';

export class RegisterTrackerDto implements ITracker {
  constructor(data: ITracker) {
    this.id = data.id;
    this.partner_id = data.partner_id;
    this.host = data.host;
    this.platform = data.platform;
    this.google_analytics = data.google_analytics;
    this.payload = data.payload;
    this.date_created = data.date_created;
  }
  @ApiProperty() id: number;
  @ApiProperty() partner_id: number;
  @ApiProperty() host: string;
  @ApiProperty() platform: string;
  @ApiProperty() google_analytics: string;
  @ApiProperty() payload: string;
  @ApiProperty() date_created: Date;
}
