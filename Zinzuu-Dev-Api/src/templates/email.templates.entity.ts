import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('templates')
export class EmailTemplate {
  @PrimaryGeneratedColumn() template_id: number;
  @Column({
    type: 'int',
    nullable: false,
  })
  customer_id: number;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  template_title: string;
  @Column({
    type: 'text',
    nullable: false,
  })
  template_data: string;
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
