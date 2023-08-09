import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegisterQrCmd } from './cmd/qr.registeration.cmd';
import { TrackQrCmd } from './cmd/qr.track.cmd';
import { QrService } from './qr.service';

@ApiTags('Qr')
@Controller('qr')
export class QrController {
  constructor(private readonly qrService: QrService) {}

  @ApiResponse({
    description: 'added successfully!',
    status: HttpStatus.OK,
  })
  @ApiResponse({ description: 'Forbidden', status: HttpStatus.FORBIDDEN })
  @Post('add')
  public async addQr(@Body() qr: RegisterQrCmd) {
    const data = await this.qrService.addQr(qr);
    return {
      message: 'added successfully',
    };
  }

  @Get('get')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: RegisterQrCmd,
  })
  @ApiResponse({ description: 'Not Found.', status: HttpStatus.NOT_FOUND })
  public async getQrList(): Promise<RegisterQrCmd[]> {
    return await this.qrService.getQrList();
  }

  @Get('track/:id')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: TrackQrCmd,
  })
  @ApiResponse({ description: 'Not Found.', status: HttpStatus.NOT_FOUND })
  public async trackQr(@Param('id') id: string) {
    return await this.qrService.trackQr(id);
  }
}
