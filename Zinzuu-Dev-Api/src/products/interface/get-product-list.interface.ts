
export interface IProducts {
  readonly product_id?: number;
  readonly upc?: number;
  readonly sku?: number;
  readonly productName?: string;
  readonly productDescription?: string;
  readonly productPhoto?: string;
  readonly productCategory?: string;
  readonly brand?: string;
  readonly price?: number;
  readonly stock?: string;
  readonly datetime_added?: Date;
  readonly datetime_modified?: Date;
}
