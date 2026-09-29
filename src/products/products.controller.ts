import { Controller, Get } from "@nestjs/common";
import { productsService } from "./products.service";

@Controller("products")
export class productController{
    constructor(private readonly productService:productsService){}

@Get()
getProduct() {
    return this.productService.getProduct();
}

}