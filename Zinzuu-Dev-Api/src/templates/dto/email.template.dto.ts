import { ApiProperty } from '@nestjs/swagger';

export class EmailTemplateDto {
  @ApiProperty() template_id: number;
  @ApiProperty() customer_id: number;
  @ApiProperty() template_title: string;
  @ApiProperty() template_data: string;
  @ApiProperty() datetime_added: Date;
  @ApiProperty() datetime_updated: Date;
}

export class GetAllTemplatesDto {
  @ApiProperty({ required: false, isArray: true, type: EmailTemplateDto })
  result: EmailTemplateDto[];
}

export class TrackerDto {
  @ApiProperty() tracking_id: number;
  @ApiProperty() phone_number: string;
  @ApiProperty() template_id: number;
  @ApiProperty() datetime_added: Date;
  @ApiProperty() datetime_updated: Date;
}
