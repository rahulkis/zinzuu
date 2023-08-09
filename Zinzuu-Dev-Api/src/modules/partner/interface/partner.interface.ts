export interface IPartner {
  readonly vip_id?: number;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly email?: string;
  readonly username?: string;
  readonly password?: string;
  readonly address?: string;
  readonly phone?: string;
  readonly fax?: string;
  readonly company?: string;
  readonly company_address?: string;
  readonly company_email?: string;
  readonly company_phone?: string;
  readonly company_fax?: string;
  readonly role?: string;
  readonly datetime_added?: Date;
  readonly datetime_modified?: Date;
  readonly status?: number;
}
