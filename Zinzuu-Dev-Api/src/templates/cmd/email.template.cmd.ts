import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class EmailTemplateCmd {
  @ApiProperty() @IsNotEmpty() customer_id: number;
  @ApiProperty() @IsNotEmpty() template_title: string;
  @ApiProperty() @IsNotEmpty() template_data: string;
}
export class TrackerCmd {
  @ApiProperty() @IsNotEmpty() template_id: number;
  @ApiProperty() @IsNotEmpty() phone_number: string;
}
