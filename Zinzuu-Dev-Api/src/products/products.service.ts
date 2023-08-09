import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { Products } from './products.csv.entity';
import { Scanned_Products } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Scanned_Products)
    private readonly productsRepository: Repository<Scanned_Products>,
    @InjectRepository(Products)
    private readonly productsUploadRepository: Repository<Products>,
  ) {}
  public async addProducts(products: any): Promise<any> {
    try {
      const data = [];
      const array = products.products;
      for (let i = 0; i < array.length; i++) {
        let obj = {};
        obj['customer_id'] = products.customer_id;
        obj['products'] = array[i];
        data.push(obj);
      }

      //  return await getConnection().createQueryBuilder().insert().into(Scanned_Products).values([{ 'customer_id': 1, 'products': '12' }, { 'customer_id': 1, 'products': '13' }]).execute();
      return await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Scanned_Products)
        .values(data)
        .execute();
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  public async uploadProducts(products: any) {
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Products)
      .values(products)
      .execute();
  }

  public async getProductList(): Promise<Products[]> {
    return this.productsUploadRepository.find();
  }
}
