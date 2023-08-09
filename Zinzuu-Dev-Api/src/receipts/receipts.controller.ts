import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReceiptUploadCmd } from './cmd/upload_receipt.cmd';
import { ReceiptsService } from './receipts.service';
import { Scanned_Receipts } from './receipt.entity';
import { UploadReceiptDto } from './dto/upload-receipt.dto';

@ApiTags('receipts')
@Controller('receipts')
export class ReceiptsController {
  constructor(private readonly receiptService: ReceiptsService) {}

  @Post('upload')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: UploadReceiptDto,
  })
  @ApiResponse({ description: 'Forbidden', status: HttpStatus.FORBIDDEN })
  public async uploadReceipt(
    @Body() receipt: ReceiptUploadCmd,
  ): Promise<UploadReceiptDto> {
    return await this.receiptService.uploadReceipt(
      new Scanned_Receipts(receipt),
    );
  }
}
