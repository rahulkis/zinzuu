import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Scanned_Products } from './products.entity'
import { Products } from './products.csv.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Scanned_Products,Products])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule { }
