import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('custom_comissions')
export class CustomComissions {
  @PrimaryGeneratedColumn() id: number;
  @Column({
    type: 'int',
    nullable: false,
  })
  mav_id: number;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  partner: string;
  @Column({
    type: 'int',
    nullable: false,
  })
  level1_comission: number;
  @Column({
    type: 'int',
    nullable: false,
  })
  level2_comission: number;
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
