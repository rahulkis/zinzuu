import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('generated_qr')
export class QR {
  @PrimaryGeneratedColumn() id: number;
  @Column({
    type: 'int',
    nullable: false,
  })
  customer_id: number;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  qr_data: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  qr_image: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  unique_code: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  type: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  discount: number;
  @Column({
    type: 'timestamp',
    nullable: true,
    default: () => null,
  })
  expiry_date: Date;
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  datetime_added: Date;
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  datetime_updated: Date;
}
