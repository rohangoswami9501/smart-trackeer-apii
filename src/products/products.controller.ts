import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { productsService } from "./products.service";

@Controller("tasks")
export class productController{
    constructor(private readonly productService:productsService){}

@Get()
getTasks(@Query("status") status:string,@Query("search") search:string){
    if(status){
        return this.productService.getTaskByStatus(status)
    }
    if(search){
        return this.productService.getTaskBySearch(search)
    }
    return this.productService.getTasks()
}

@Get(":id")
getTask(@Param("id") id:string){
    return this.productService.getTask(Number(id));
}

@Post()
createTask(@Body() body:any){
    console.log(body)
    return this.productService.createTask(body)
}


}