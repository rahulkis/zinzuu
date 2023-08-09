export interface ITracker {
  readonly id?: number;
  readonly partner_id?: number;
  readonly host?: string;
  readonly platform?: string;
  readonly google_analytics?: string;
  readonly payload?: string;
  readonly date_created?: Date;
}
