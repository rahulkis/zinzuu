export interface IReceipts {
  readonly id?: number;
  readonly customer_id?: number;
  readonly ocr_data?: string;
  readonly image_link?: string;
  readonly datetime_added?: Date;
  readonly datetime_modified?: Date;
}