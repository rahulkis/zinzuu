import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('templates_tracker')
export class TemplateTracker {
  @PrimaryGeneratedColumn() tracking_id: number;
  @Column({
    type: 'int',
    nullable: false,
  })
  template_id: number;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  phone_number: string;
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
