import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Partner } from './entity/partner.entity';
import { Roles } from './entity/roles.entity';

@Injectable()
export class PartnerService {
  constructor(
    @InjectRepository(Partner)
    private readonly partnerRepository: Repository<Partner>,
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>,
  ) {}

  public async getPartnerRole(roles_id: number): Promise<Roles> {
    let roles: Roles;
    try {
      roles = await this.rolesRepository.findOne({
        where: { roles_id: roles_id },
      });
    } catch (error) {}
    if (!roles) {
      throw new NotFoundException(
        `User with ${JSON.stringify(roles_id)} does not exist`,
      );
    }
    return roles;
  }

  public async findPartner(params: DeepPartial<Partner>): Promise<Partner> {
    let partner: Partner;
    try {
      partner = await this.partnerRepository.findOne({
        where: { username: params.username, password: params.password },
      });
    } catch (error) {}
    if (!partner) {
      throw new NotFoundException(
        `User with ${JSON.stringify(params)} does not exist`,
      );
    }
    return partner;
  }

  public async loginPartner(params: DeepPartial<Partner>): Promise<Partner> {
    let partner: Partner;
    if (!params.username || !params.password) {
      throw new BadRequestException(
        `Either username or password does not exists in the parameters.`,
      );
    }
    try {
      partner = await this.partnerRepository.findOne({
        where: { username: params.username, password: params.password },
      });
    } catch (error) {}
    if (!partner) {
      throw new BadRequestException(
        `User with ${JSON.stringify(params)} does not exist`,
      );
    }
    return partner;
  }

  public async updatePartner(
    vip_id: number,
    payload: Partner,
  ): Promise<Partner> {
    const partner = await this.findById({ vip_id });
    const newData = {
      ...partner,
      password: payload.password,
      phone: payload.phone,
      address: payload.address,
      status: payload.status,
    };
    try {
      return this.partnerRepository.save(newData);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  public async findById(params: DeepPartial<Partner>): Promise<Partner> {
    let partner: Partner;
    try {
      partner = await this.partnerRepository.findOne(params);
    } catch (error) {}
    if (!partner) {
      throw new NotFoundException(
        `User with ${JSON.stringify(params)} does not exist`,
      );
    }
    return partner;
  }

  public async getAllPartners(): Promise<Partner[]> {
    let partner: Partner[];
    try {
      partner = await this.partnerRepository.find();
    } catch (error) {}
    if (!partner) {
      throw new NotFoundException('Something went wrong');
    }
    return partner;
  }
}
