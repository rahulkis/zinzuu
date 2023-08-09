import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class EmailLogsCmd {
  @ApiProperty() @IsNotEmpty() customer_id: number;
  @ApiProperty() @IsNotEmpty() template_id: number;
  @ApiProperty() @IsNotEmpty() email: string;
}
export class SMSLogsCmd {
  @ApiProperty() @IsNotEmpty() customer_id: number;
  @ApiProperty() @IsNotEmpty() template_id: number;
  @ApiProperty() @IsNotEmpty() phone_number: string;
}
