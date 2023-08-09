import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmailLogsCmd, SMSLogsCmd } from './cmd/logs.cmd';
import { EmailLogs, SMSLogs } from './logs.entity';

@Injectable()
export class LogsService {
  constructor(
    @InjectRepository(SMSLogs)
    private readonly smsLogsRepository: Repository<SMSLogs>,
    @InjectRepository(EmailLogs)
    private readonly emailLogsRepository: Repository<EmailLogs>,
  ) {}
  public async smsLogs(logData: SMSLogsCmd): Promise<SMSLogs> {
    try {
      return await this.smsLogsRepository.save(logData);
    } catch (error) {
      throw new HttpException(error, HttpStatus.FORBIDDEN);
    }
  }

  public async emailLogs(logData: EmailLogsCmd): Promise<EmailLogs> {
    try {
      return await this.emailLogsRepository.save(logData);
    } catch (error) {
      throw new HttpException(error, HttpStatus.FORBIDDEN);
    }
  }

  public async getAllSmsLogs(): Promise<any> {
    try {
      return this.smsLogsRepository.find();
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }
}
