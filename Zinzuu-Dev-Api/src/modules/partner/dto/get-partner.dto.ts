import { ApiProperty } from '@nestjs/swagger';
import { IPartner } from '../interface/partner.interface';
import { IRoles } from '../interface/role.interface';

export class GetPartnerDto {
  constructor(data: IPartner) {
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
    this.status = data.status;
  }
  @ApiProperty() vip_id: number;
  @ApiProperty() firstname: string;
  @ApiProperty() lastname: string;
  @ApiProperty() email: string;
  @ApiProperty() username: string;
  @ApiProperty() password: string;
  @ApiProperty() address: string;
  @ApiProperty() phone: string;
  @ApiProperty() fax: string;
  @ApiProperty() company: string;
  @ApiProperty() company_address: string;
  @ApiProperty() company_email: string;
  @ApiProperty() company_phone: string;
  @ApiProperty() company_fax: string;
  @ApiProperty() role: string;
  @ApiProperty() datetime_added: Date;
  @ApiProperty() datetime_modified: Date;
  @ApiProperty() status: number;
}

export class GetRolesDto {
  constructor(data: IRoles) {
    this.roles_id = data.roles_id;
    this.name = data.name;
    this.description = data.description;
    this.status = data.status;
  }
  @ApiProperty() roles_id: number;
  @ApiProperty() name: string;
  @ApiProperty() description: string;
  @ApiProperty() datetime_added: Date;
  @ApiProperty() datetime_modified: Date;
  @ApiProperty() status: number;
}

export class GetAllPartnerDto {
  @ApiProperty({ required: false, isArray: true, type: GetPartnerDto })
  result: GetPartnerDto[];
}
export class GetAllRolesDto {
  @ApiProperty({ required: false, isArray: true, type: GetRolesDto })
  result: GetRolesDto;
}
