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
import { EmailTemplateCmd, TrackerCmd } from './cmd/email.template.cmd';
import {
  GetAllTemplatesDto,
  EmailTemplateDto,
  TrackerDto,
} from './dto/email.template.dto';
import { TemplatesService } from './templates.service';

@ApiTags('Templates')
@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Post('generate')
  @ApiResponse({
    description: 'Generated successfully!',
    status: HttpStatus.OK,
  })
  @ApiResponse({ description: 'Forbidden', status: HttpStatus.FORBIDDEN })
  public async generateTemplate(
    @Body() templateData: EmailTemplateCmd,
  ): Promise<any> {
    await this.templatesService.generateTemplate(templateData);
    return {
      message: 'Generated successfully.',
    };
  }

  @Get('get-templates/all')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: GetAllTemplatesDto,
  })
  @ApiResponse({ description: 'Not Found.', status: HttpStatus.NOT_FOUND })
  public async getTemplateList(): Promise<any> {
    return await this.templatesService.getTemplateList();
  }

  @Get('get-template/:id')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: EmailTemplateDto,
  })
  @ApiResponse({ description: 'Not Found.', status: HttpStatus.NOT_FOUND })
  public async findTemplate(
    @Param('id') template_id: number,
  ): Promise<EmailTemplateDto> {
    return await this.templatesService.findTemplate(template_id);
  }

  @Put('update/:id')
  @ApiResponse({
    description: 'Updated successfully!',
    status: HttpStatus.OK,
  })
  @ApiResponse({ description: 'Not Found', status: HttpStatus.NOT_FOUND })
  public async updateTemplate(
    @Param('id') id: number,
    @Body() template: EmailTemplateCmd,
  ): Promise<any> {
    await this.templatesService.updateTemplate(id, template);
    return {
      message: 'Updated successfully',
    };
  }

  @Delete('delete-template/:id')
  @ApiResponse({
    description: 'Deleted successfully!',
    status: HttpStatus.OK,
  })
  @ApiResponse({ description: 'Not Found', status: HttpStatus.NOT_FOUND })
  public async removeTemplate(@Param('id') id: number) {
    await this.templatesService.removeTemplate(id);
    return {
      message: 'Deleted successfully',
    };
  }

  @Post('track')
  @ApiResponse({
    description: 'success!',
    status: HttpStatus.OK,
    type: TrackerDto,
  })
  @ApiResponse({ description: 'Forbidden', status: HttpStatus.FORBIDDEN })
  public async trackTemplate(
    @Body() trackingData: TrackerCmd,
  ): Promise<TrackerDto> {
    return await this.templatesService.trackTemplate(trackingData);
  }
}
