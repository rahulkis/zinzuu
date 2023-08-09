import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { IPartner } from '../interface/partner.interface';

@Entity({ name: 'vip_admin' })
export class Partner implements IPartner {
  constructor(data: IPartner) {
    if (!!data) {
      this.vip_id = data.vip_id;
      this.firstname = data.firstname;
      this.lastname = data.lastname;
      this.email = data.email;
      this.username = data.username;
      this.password = data.password;
      this.address = data.address;
      this.phone = data.phone;
      this.fax = data.fax;
      this.company = data.company;
      this.company_address = data.company_address;
      this.company_email = data.company_email;
      this.company_phone = data.company_phone;
      this.company_fax = data.company_fax;
      this.role = data.role;
      this.datetime_added = data.datetime_added;
      this.datetime_modified = data.datetime_modified;
      this.status = data.status;
    }
  }

  @PrimaryGeneratedColumn() public vip_id: number;
  @Column({ length: 255 }) public firstname: string;
  @Column({ length: 255 }) public lastname: string;
  @Column({ length: 255 }) public email: string;
  @Column({ length: 50 }) public username: string;
  @Column({ length: 50 }) public password: string;
  @Column({ length: 255 }) public address: string;
  @Column({ length: 50 }) public phone: string;
  @Column({ length: 50 }) public fax: string;
  @Column({ length: 255 }) public company: string;
  @Column({ length: 255 }) public company_address: string;
  @Column({ length: 255 }) public company_email: string;
  @Column({ length: 50 }) public company_phone: string;
  @Column({ length: 50 }) public company_fax: string;
  @Column({ length: 2 }) public role: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public datetime_added: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public datetime_modified: Date;
  @Column() public status: number;
}
