import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('global_comissions')
export class GlobalComissions {
  @PrimaryGeneratedColumn() id: number;
  @Column({
    type: 'int',
    nullable: false,
  })
  mav_id: number;
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