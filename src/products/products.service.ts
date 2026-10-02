import { Injectable } from "@nestjs/common";
import { title } from "process";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "./schemas/product.schema";
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class productsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
) {}


    async getTasks() {
        return await this.productModel.find();
    }

    async getTask(id:string){
      const task = this.productModel.find({id:id})
      if(!task){
        return{message:"Task Not Found"}
      }
        return await task;
    }

    async  getTaskByStatus(status:string){
      return await this.productModel.find({status:status})
    }

    async getTaskBySearch(search:string){
      return this.productModel.find({
        title:{$regex:search,$options:"i"}
      })
    }

    async getTaskByPriority(priority:string){
      return await this.productModel.find({priority:priority})
    }

    async createTask(body: CreateProductDto) {
        return this.productModel.create(body);
    }


    async updateTask(id: string, body: UpdateProductDto) {
    return await this.productModel.findOneAndUpdate(
        { id: id },
        { $set: body },
        { new: true }
    );
    }

    async deleteTask(id: string) {
    return await this.productModel.findOneAndDelete({ id: id });
    }

}