import { ApiProperty } from '@nestjs/swagger';

export class EmailLogsDto {
  @ApiProperty() log_id: number;
  @ApiProperty() template_id: number;
  @ApiProperty() customer_id: number;
  @ApiProperty() email: string;
  @ApiProperty() datetime_added: Date;
  @ApiProperty() datetime_updated: Date;
}

export class SMSLogsDto {
  @ApiProperty() log_id: number;
  @ApiProperty() customer_id: number;
  @ApiProperty() phone_number: string;
  @ApiProperty() template_id: number;
  @ApiProperty() datetime_added: Date;
  @ApiProperty() datetime_updated: Date;
}

export class GetAllSmsDto {
  @ApiProperty({ required: false, isArray: true, type: SMSLogsDto })
  result: SMSLogsDto[];
}
