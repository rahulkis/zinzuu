import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('scanned_products')

export class Scanned_Products {
    @PrimaryGeneratedColumn() product_id: number;
    @Column({
        type: 'int',
        nullable: false
    }) customer_id: number;
    @Column({
        type: 'varchar',
        nullable: false
    }) products: string;
    @Column({
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' 
    })
    datetime_added:Date
    @Column({
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' 
    })
    datetime_updated:Date
}
