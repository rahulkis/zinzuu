import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tracked_qr')
export class TrackedQr {
  @PrimaryGeneratedColumn() id: number;
//   @Column({
//     type: 'int',
//     nullable: false,
//   })
//   customer_id: number;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  code: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  type: string;
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
