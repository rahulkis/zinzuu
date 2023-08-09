import { ApiProperty } from '@nestjs/swagger';

export class GlobalComissionDto {
  @ApiProperty() id: number;
  @ApiProperty() mav_id: number;
  @ApiProperty() level1_comission: number;
  @ApiProperty() level2_comission: number;
  @ApiProperty() datetime_added: Date;
  @ApiProperty() datetime_updated: Date;
}


export class GetAllGlobalComissionsDto {
  @ApiProperty({ required: false, isArray: true, type: GlobalComissionDto })
  result: GlobalComissionDto[];
}
