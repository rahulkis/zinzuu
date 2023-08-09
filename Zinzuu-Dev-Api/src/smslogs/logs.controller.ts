import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmailLogsCmd, SMSLogsCmd } from './cmd/logs.cmd';
import { EmailLogsDto, GetAllSmsDto, SMSLogsDto } from './dto/logs.dto';
import { LogsService } from './logs.service';

@ApiTags('Logs')
@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Post('sms-logs')
  @ApiResponse({
    description: 'success!',
    status: HttpStatus.OK,
    type: SMSLogsDto,
  })
  @ApiResponse({ description: 'Forbidden', status: HttpStatus.FORBIDDEN })
  public async smsLogs(@Body() logsData: SMSLogsCmd): Promise<SMSLogsDto> {
    return await this.logsService.smsLogs(logsData);
  }
  @Post('email-logs')
  @ApiResponse({
    description: 'success!',
    status: HttpStatus.OK,
    type: EmailLogsDto,
  })
  @ApiResponse({ description: 'Forbidden', status: HttpStatus.FORBIDDEN })
  public async emailLogs(
    @Body() logsData: EmailLogsCmd,
  ): Promise<EmailLogsDto> {
    return await this.logsService.emailLogs(logsData);
  }

  @Get('get-sms-logs/all')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: GetAllSmsDto,
  })
  @ApiResponse({ description: 'Not Found.', status: HttpStatus.NOT_FOUND })
  public async getTemplateList(): Promise<GetAllSmsDto> {
    return await this.logsService.getAllSmsLogs();
  }
}
