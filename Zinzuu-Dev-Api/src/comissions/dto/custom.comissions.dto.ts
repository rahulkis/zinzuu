import { ApiProperty } from '@nestjs/swagger';

export class CustomComissionDto {
  @ApiProperty() id: number;
  @ApiProperty() mav_id: number;
  @ApiProperty() partner: string;
  @ApiProperty() level1_comission: number;
  @ApiProperty() level2_comission: number;
  @ApiProperty() datetime_added: Date;
  @ApiProperty() datetime_updated: Date;
}

export class GetAllCustomComissionsDto {
  @ApiProperty({ required: false, isArray: true, type: CustomComissionDto })
  result: CustomComissionDto[];
}