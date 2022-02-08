import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './dto/products.service';
import { Product, productSchema } from './schemas/product.schema';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: productSchema }]),
  ],
})
export class ProductsModule {}
