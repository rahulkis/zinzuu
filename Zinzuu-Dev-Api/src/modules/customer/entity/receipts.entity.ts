import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { IReceipts } from '../interface/receipts.interface';

@Entity()
export class Receipts implements IReceipts {
  constructor(data: IReceipts) {
    if (!!data) {
      this.id = data.id;
      this.customer_id = data.customer_id;
      this.ocr_data = data.ocr_data;
      this.image_link = data.image_link;
      this.datetime_added = data.datetime_added;
      this.datetime_modified = data.datetime_modified;
    }
  }

  @PrimaryGeneratedColumn() id: number;
  @Column() public customer_id: number;
  @Column() public ocr_data: string;
  @Column() public image_link: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public datetime_added: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public datetime_modified: Date;

}
