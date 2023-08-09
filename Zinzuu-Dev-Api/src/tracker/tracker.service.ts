import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Tracker } from './tracker.entity';
// import { Hash } from '../utils/hash';

@Injectable()
export class TrackerService {
  constructor(
    @InjectRepository(Tracker)
    private readonly trackerRepository: Repository<Tracker>,
  ) {}

  public async register(tracker: Tracker): Promise<any> {
    try {
      return await this.trackerRepository.save(tracker);
    } catch (error) {
      throw new HttpException('Email already exist.', HttpStatus.FORBIDDEN);
    }
  }

  public async findCustomerByEmail(
    params: DeepPartial<Tracker>,
  ): Promise<Tracker> {
    let customer: Tracker;
    try {
      customer = await this.trackerRepository.findOne(params);
    } catch (error) {}
    if (!customer) {
      throw new NotFoundException(
        `User with ${JSON.stringify(params)} does not exist`,
      );
    }
    return customer;
  }

  public async updateCustomer(id: number, payload: Tracker): Promise<Tracker> {
    const tracker = await this.findById({ id });
    // payload.password = await Hash.make(payload.password);
    const newData = {
      ...tracker,
      partner_id: payload.partner_id,
      host: payload.host,
      platform: payload.platform,
      google_analytics: payload.google_analytics,
      payload: payload.payload,
      date_created: payload.date_created,
    };
    try {
      return this.trackerRepository.save(newData);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  public async findById(params: DeepPartial<Tracker>): Promise<Tracker> {
    let customer: Tracker;
    try {
      customer = await this.trackerRepository.findOne(params);
    } catch (error) {}
    if (!customer) {
      throw new NotFoundException(
        `User with ${JSON.stringify(params)} does not exist`,
      );
    }
    return customer;
  }
}
