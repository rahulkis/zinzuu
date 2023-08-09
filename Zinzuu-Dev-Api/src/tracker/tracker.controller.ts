import {
  Body,
  Controller,
  Post,
  HttpStatus,
  Get,
  Put,
  Param,
} from '@nestjs/common';
import { TrackerService } from './tracker.service';
import { TrackerRegisterCmd } from './cmd/tracker-register.cmd';
import { RegisterTrackerDto } from './dto/register-tracker.dto';
import { GetTrackerDto } from './dto/get-tracker.dto';
import { GetTrackerCmd } from './cmd/get-tracker.cmd';
import { Tracker } from './tracker.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateTrackerCmd } from './cmd/update-tracker.cmd';
import { UpdateTrackerDto } from './dto/update-tracker.dto';

@ApiTags('tracker')
@Controller('tracker')
export class TrackerController {
  constructor(private readonly trackerService: TrackerService) {}

  @Post('register')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: RegisterTrackerDto,
  })
  @ApiResponse({ description: 'Bad request.', status: HttpStatus.BAD_REQUEST })
  public async register(
    @Body() tracker: TrackerRegisterCmd,
  ): Promise<RegisterTrackerDto> {
    return await this.trackerService.register(new Tracker(tracker));
  }

  @Post('get')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: GetTrackerDto,
  })
  @ApiResponse({ description: 'Not Found.', status: HttpStatus.NOT_FOUND })
  public async findCustomer(
    @Body() tracker: GetTrackerCmd,
  ): Promise<GetTrackerDto> {
    const cust = await this.trackerService.findCustomerByEmail(tracker);
    return new GetTrackerDto(cust);
  }

  @Put('update/:id')
  public async updateCustomer(
    @Param('id') id: number,
    @Body() tracker: UpdateTrackerCmd,
  ): Promise<UpdateTrackerDto> {
    const updatedCustomer = await this.trackerService.updateCustomer(
      id,
      new Tracker(tracker),
    );
    return new UpdateTrackerDto(updatedCustomer);
  }
}
