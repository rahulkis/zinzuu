import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sms_logs')
export class SMSLogs {
  @PrimaryGeneratedColumn() log_id: number;
  @Column({
    type: 'int',
    nullable: false,
  })
  template_id: number;
  @Column({
    type: 'int',
    nullable: false,
  })
  customer_id: number;
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

@Entity('email_logs')
export class EmailLogs {
  @PrimaryGeneratedColumn() log_id: number;
  @Column({
    type: 'int',
    nullable: false,
  })
  template_id: number;
  @Column({
    type: 'int',
    nullable: false,
  })
  customer_id: number;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  email: string;
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
