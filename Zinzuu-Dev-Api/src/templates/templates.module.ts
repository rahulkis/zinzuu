import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailTemplate } from './email.templates.entity';
import { TemplateTracker } from './template.track.entity';
import { TemplatesController } from './templates.controller';
import { TemplatesService } from './templates.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmailTemplate,TemplateTracker])],
  controllers: [TemplatesController],
  providers: [TemplatesService],
})
export class TemplatesModule {}
