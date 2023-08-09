import { ApiProperty } from '@nestjs/swagger';

export class GetTrackerCmd {
  @ApiProperty() readonly id: number;
}
