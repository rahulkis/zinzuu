import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Products } from './products.csv.entity';
import { ProductsService } from './products.service';
import { GetProdcutListDto } from './dto/get-productList.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('add')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
  })
  @ApiResponse({ description: 'Forbidden', status: HttpStatus.FORBIDDEN })
  public async addProducts(@Body() products: any): Promise<any> {
    const prod = await this.productsService.addProducts(products);
    return {
      message: 'Products added successfully',
    };
  }
  @Post('upload-products')
  @ApiResponse({
    description: 'Uploaded successfully!',
    status: HttpStatus.OK,
  })
  @ApiResponse({ description: 'Forbidden', status: HttpStatus.FORBIDDEN })
  public async uploadProducts(@Body() products: any) {
    const productsCsv = await this.productsService.uploadProducts(products);
    return {
      message: 'Uploaded successfully',
    };
  }
  @Get('get-products')
  @ApiResponse({
    description: 'Success!',
    status: HttpStatus.OK,
    type: GetProdcutListDto,
  })
  @ApiResponse({ description: 'Not Found.', status: HttpStatus.NOT_FOUND })
  public async getProductList(): Promise<Products[]> {
    return await this.productsService.getProductList();
  }
}
