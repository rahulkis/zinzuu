import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TemplateTracker } from './template.track.entity';
import { EmailTemplate } from './email.templates.entity';
import { TrackerCmd } from './cmd/email.template.cmd';

@Injectable()
export class TemplatesService {
  constructor(
    @InjectRepository(EmailTemplate)
    private readonly emailTemplateRepository: Repository<EmailTemplate>,
    @InjectRepository(TemplateTracker)
    private readonly trackRepository: Repository<TemplateTracker>,
  ) {}

  public async generateTemplate(templateData: any): Promise<any> {
    try {
      return await this.emailTemplateRepository.save(templateData);
    } catch (error) {
      throw new HttpException(error, HttpStatus.FORBIDDEN);
    }
  }

  public async getTemplateList(): Promise<any> {
    try {
      return this.emailTemplateRepository.find();
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  public async findTemplate(id: number): Promise<EmailTemplate> {
    try {
      const template = await this.emailTemplateRepository.findOne({
        template_id: id,
      });
      if (!template) {
        throw new NotFoundException(`No data found with this template Id`);
      }
      return template;
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  public async updateTemplate(
    template_id: number,
    payload: any,
  ): Promise<EmailTemplate> {
    try {
      const template = await this.emailTemplateRepository.findOne({
        template_id,
      });
      if (!template) {
        throw new NotFoundException(`No data found with this template Id`);
      }
      const newData = {
        ...template,
        template_data: payload.template_data,
        template_title: payload.template_title,
        customer_id: payload.customer_id,
      };

      return this.emailTemplateRepository.save(newData);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  public async removeTemplate(template_id: number): Promise<any> {
    try {
      await this.emailTemplateRepository.delete(template_id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  public async trackTemplate(
    trackingData: TrackerCmd,
  ): Promise<TemplateTracker> {
    try {
      return await this.trackRepository.save(trackingData);
    } catch (error) {
      throw new HttpException(error, HttpStatus.FORBIDDEN);
    }
  }
}
