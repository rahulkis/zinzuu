import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ITracker } from './interface/tracker.interface';

@Entity('tracker')
export class Tracker implements ITracker {
  constructor(data: ITracker) {
    if (!!data) {
      this.id = data.id;
      this.partner_id = data.partner_id;
      this.host = data.host;
      this.platform = data.platform;
      this.google_analytics = data.google_analytics;
      this.payload = data.payload;
      this.date_created = data.date_created;
    }
  }

  @PrimaryGeneratedColumn() public id: number;
  @Column() public partner_id: number;
  @Column({ length: 100 }) public host: string;
  @Column({ length: 255 }) public platform: string;
  @Column({ length: 1000 }) public google_analytics: string;
  @Column({ length: 2000 }) public payload: string;
  @Column() public date_created: Date;
}
