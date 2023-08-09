import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class GlobalComissionsCmd {
  @ApiProperty() @IsNotEmpty() mav_id: number;
  @ApiProperty() @IsNotEmpty() level1_comission: number;
  @ApiProperty() @IsNotEmpty() level2_comission: number;
}
// export class SMSLogsCmd {
//   @ApiProperty() @IsNotEmpty() customer_id: number;
//   @ApiProperty() @IsNotEmpty() template_id: number;
//   @ApiProperty() @IsNotEmpty() phone_number: string;
// }
