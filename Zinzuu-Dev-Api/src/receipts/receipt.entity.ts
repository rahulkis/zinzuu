import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { IReceipt } from './interface/receipt.interface';

@Entity()
export class Scanned_Receipts implements IReceipt {
  constructor(data: IReceipt) {
    if (!!data) {
      this.id = data.id;
      this.customer_id = data.customer_id;
      this.ocr_data = data.ocr_data;
      this.image_link = data.image_link;
    }
  }

  @PrimaryGeneratedColumn() public id: number;
  @Column() public customer_id: number;
  @Column() public ocr_data: string;
  @Column() public image_link: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public datetime_added: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public datetime_modified: Date;
}
