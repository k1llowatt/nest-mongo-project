import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect
} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsService } from "./dto/products.service";
import { Product } from "./schemas/product.schema";

@Controller("products")
export class ProductsController {

  constructor(private readonly productSrervice: ProductsService) {
  }

  @Get()
  getAll():Promise<Product[]> {
    return this.productSrervice.getAll()
  }

  @Get(":id")
  getOne(@Param("id") id: string):Promise<Product>{
    return this.productSrervice.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header("Cache-Control", "none")
  create(@Body() createProductDto: CreateProductDto): Promise<Product>{
    return this.productSrervice.create(createProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<Product> {
    return this.productSrervice.remove(id);
  }

  @Put(":id")
  update(@Body() updateProductDto: UpdateProductDto, @Param("id") id: string): Promise<Product> {
    return this.productSrervice.update(id, updateProductDto)
  }

}
