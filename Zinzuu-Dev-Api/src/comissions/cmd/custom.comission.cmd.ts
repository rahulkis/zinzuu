import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CustomComissionsCmd {
  @ApiProperty() @IsNotEmpty() mav_id: number;
  @ApiProperty() @IsNotEmpty() partner: string;
  @ApiProperty() @IsNotEmpty() level1_comission: number;
  @ApiProperty() @IsNotEmpty() level2_comission: number;
}