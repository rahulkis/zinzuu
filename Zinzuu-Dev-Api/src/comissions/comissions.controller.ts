import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomComissionsCmd } from './cmd/custom.comission.cmd';
import { GlobalComissionsCmd } from './cmd/global.comissions.cmd';
import { ComissionsService } from './comissions.service';
import {
  CustomComissionDto,
  GetAllCustomComissionsDto,
} from './dto/custom.comissions.dto';
import {
  GetAllGlobalComissionsDto,
  GlobalComissionDto,
} from './dto/global.comissions.dto';

@ApiTags('Comissions')
@Controller('comissions')
export class ComissionsController {
  constructor(private readonly comissionsService: ComissionsService) {}

  @Post('global-comissions')
  @ApiResponse({
    description: 'success!',
    status: HttpStatus.OK,
    type: GlobalComissionDto,
  })
  @ApiResponse({ description: 'Forbidden', status: HttpStatus.FORBIDDEN })
  public async globalComissions(
    @Body() comissionData: GlobalComissionsCmd,
  ): Promise<GlobalComissionsCmd> {
    return await this.comissionsService.globalComissions(comissionData);
  }

  @Get('get-global-comissions/all')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: GetAllGlobalComissionsDto,
  })
  @ApiResponse({ description: 'Not Found.', status: HttpStatus.NOT_FOUND })
  public async getGlobalComissions(): Promise<GetAllGlobalComissionsDto> {
    return await this.comissionsService.getGlobalComissions();
  }

  @Put('update/:id')
  @ApiResponse({
    description: 'Updated successfully!',
    status: HttpStatus.OK,
  })
  @ApiResponse({ description: 'Not Found.', status: HttpStatus.NOT_FOUND })
  public async updateGlobalComissions(
    @Param('id') id: number,
    @Body() comissionData: GlobalComissionsCmd,
  ): Promise<any> {
    await this.comissionsService.updateGlobalComissions(id, comissionData);
    return {
      message: 'Updated successfully',
    };
  }

  @Post('custom-comissions')
  @ApiResponse({
    description: 'success!',
    status: HttpStatus.OK,
    type: CustomComissionDto,
  })
  @ApiResponse({ description: 'Forbidden', status: HttpStatus.FORBIDDEN })
  public async customComissions(
    @Body() comissionData: CustomComissionsCmd,
  ): Promise<GlobalComissionDto> {
    return await this.comissionsService.customComissions(comissionData);
  }

  @Get('get-custom-comissions/all')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: GetAllCustomComissionsDto,
  })
  @ApiResponse({ description: 'Not Found.', status: HttpStatus.NOT_FOUND })
  public async getCustomComissions(): Promise<GetAllCustomComissionsDto> {
    return await this.comissionsService.getCustomComissions();
  }

  @Delete('delete-custom-comission-partner/:id')
  @ApiResponse({
    description: 'Deleted successfully!',
    status: HttpStatus.OK,
  })
  @ApiResponse({ description: 'Not Found', status: HttpStatus.NOT_FOUND })
  public async removeCustomComissionPartner(@Param('id') id: number) {
    await this.comissionsService.removeCustomComissionPartner(id);
    return {
      message: 'Deleted successfully',
    };
  }
}
