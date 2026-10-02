import { Module } from '@nestjs/common';

import { productController } from './products.controller';
import { productsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from "./schemas/product.schema";
import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [productController],
  providers: [productsService],
})
export class ProductsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}