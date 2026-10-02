import { Controller, Get, Post, Patch, Delete, Param, Query, Body,ParseUUIDPipe } from "@nestjs/common";
import { productsService } from "./products.service";
import { CreateProductDto } from './dto/create-product.dto';

@Controller("tasks")
export class productController{
    constructor(private readonly productService:productsService){}

@Get()
getTasks(@Query("status") status:string,
@Query("search") search:string,
@Query("priority") priority:string)
{
    if(status){
        return this.productService.getTaskByStatus(status)
    }
    if(search){
        return this.productService.getTaskBySearch(search)
    }
    if(priority){
        return this.productService.getTaskByPriority(priority)
    }
    return this.productService.getTasks()
}

@Get(":id")
getTask(@Param("id", new ParseUUIDPipe())id: string){
    return this.productService.getTask(id);
}

@Post()
createTask(@Body() body: CreateProductDto){
    console.log(body)
    return this.productService.createTask(body)
}

@Patch(":id")
updateTask(@Param("id", new ParseUUIDPipe()) id: string, @Body() body: Partial<CreateProductDto>) {
    return this.productService.updateTask(id, body);
}

@Delete(":id")
deleteTask(@Param("id", new ParseUUIDPipe()) id: string) {
    return this.productService.deleteTask(id);
}

}