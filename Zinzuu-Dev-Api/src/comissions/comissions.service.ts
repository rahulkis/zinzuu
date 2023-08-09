import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomComissionsCmd } from './cmd/custom.comission.cmd';
import { GlobalComissionsCmd } from './cmd/global.comissions.cmd';
import { CustomComissions } from './entity/custom.comissions.entity';
import { GlobalComissions } from './entity/global.comission.entity';

@Injectable()
export class ComissionsService {
  constructor(
    @InjectRepository(GlobalComissions)
    private readonly globalComissionRepository: Repository<GlobalComissions>,
    @InjectRepository(CustomComissions)
    private readonly customComissionRepository: Repository<CustomComissions>,
  ) {}
  public async globalComissions(
    comissionData: GlobalComissionsCmd,
  ): Promise<GlobalComissions> {
    try {
      return await this.globalComissionRepository.save(comissionData);
    } catch (error) {
      throw new HttpException(error, HttpStatus.FORBIDDEN);
    }
  }

  public async getGlobalComissions(): Promise<any> {
    try {
      return this.globalComissionRepository.find();
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  public async updateGlobalComissions(
    id: number,
    comissionData: GlobalComissionsCmd,
  ): Promise<GlobalComissions> {
    const comission = await this.globalComissionRepository.findOne(id);
    if (!comission) {
      throw new NotFoundException('No data found');
    }
    const newData = {
      ...comission,
      mav_id: comissionData.mav_id,
      level1_comission: comissionData.level1_comission,
      level2_comission: comissionData.level2_comission,
    };
    try {
      return await this.globalComissionRepository.save(newData);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  public async customComissions(
    comissionData: CustomComissionsCmd,
  ): Promise<CustomComissions> {
    try {
      return await this.customComissionRepository.save(comissionData);
    } catch (error) {
      throw new HttpException(error, HttpStatus.FORBIDDEN);
    }
  }

  public async getCustomComissions(): Promise<any> {
    try {
      return this.customComissionRepository.find();
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  public async removeCustomComissionPartner(id: number): Promise<any> {
    try {
      await this.customComissionRepository.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }
}
