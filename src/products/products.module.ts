import { Module } from '@nestjs/common';

import { productController } from './products.controller';
import { productsService } from './products.service';

@Module({
  controllers: [productController],
  providers: [productsService],
})
export class ProductsModule {}