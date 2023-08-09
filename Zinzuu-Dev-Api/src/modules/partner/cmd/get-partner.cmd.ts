import { ApiProperty } from '@nestjs/swagger';
import { IPartner } from '../interface/partner.interface';
import { IRoles } from '../interface/role.interface';

export class GetPartnerCmd implements IPartner {
  constructor(data: IPartner) {
    this.username = data.username;
    this.password = data.password;
  }
  @ApiProperty() username: string;
  @ApiProperty() password: string;
}

export class GetPartnerRoleCmd implements IRoles {
  constructor(data: IRoles) {
    this.roles_id = data.roles_id;
  }
  @ApiProperty() roles_id: number;
}
