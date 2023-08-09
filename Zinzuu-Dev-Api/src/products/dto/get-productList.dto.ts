import { ApiProperty } from '@nestjs/swagger';
import { IProducts } from '../interface/get-product-list.interface';

export class GetProdcutListDto implements IProducts {
  constructor(data: IProducts) {
    this.product_id = data.product_id;
    this.upc = data.upc;
    this.sku = data.sku;
    this.productName = data.productName;
    this.productDescription = data.productDescription;
    this.productPhoto = data.productPhoto;
    this.productCategory = data.productCategory;
    this.brand = data.brand;
    this.price = data.price;
    this.stock = data.stock;
  }
  @ApiProperty() product_id: number;
  @ApiProperty() upc: number;
  @ApiProperty() sku: number;
  @ApiProperty() productName: string;
  @ApiProperty() productDescription: string;
  @ApiProperty() productPhoto: string;
  @ApiProperty() productCategory: string;
  @ApiProperty() default_address: string;
  @ApiProperty() brand: string;
  @ApiProperty() price: number;
  @ApiProperty() stock: string;
}
