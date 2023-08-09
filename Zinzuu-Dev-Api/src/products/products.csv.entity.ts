import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Products {
  @PrimaryGeneratedColumn() product_id: number;
  @Column({
    type: 'int',
    nullable: false,
  })
  upc: number;
  @Column({
    type: 'int',
    nullable: false,
  })
  sku: number;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  productName: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  productDescription: string;
  @Column({
    type: 'varchar',
  })
  productPhoto: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  productCategory: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  brand: string;
  @Column({
    type: 'int',
    nullable: false,
  })
  price: number;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  stock: string;
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  datetime_added: Date;
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  datetime_updated: Date;
}
