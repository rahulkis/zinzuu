import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { IRoles } from '../interface/role.interface';

@Entity({ name: 'roles' })
export class Roles implements IRoles {
  constructor(data: IRoles) {
    if (!!data) {
      this.roles_id = data.roles_id;
      this.name = data.name;
      this.description = data.description;
      this.datetime_added = data.datetime_added;
      this.datetime_modified = data.datetime_modified;
      this.status = data.status;
    }
  }

  @PrimaryGeneratedColumn() public roles_id: number;
  @Column({ length: 255 }) public name: string;
  @Column({ length: 255 }) public description: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public datetime_added: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public datetime_modified: Date;
  @Column() public status: number;
}
