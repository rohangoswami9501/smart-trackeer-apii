import { Injectable } from "@nestjs/common";
import { title } from "process";
@Injectable()
export class productsService {
  
    private product =[
  {
    "userId": 1,
    "id": 1,
    "title": "Complete the project documentation",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "Review and respond to pending emails",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "Prepare presentation for the client meeting",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "Submit the weekly progress report",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "Fix authentication issue in the application",
    "completed": false
  }
]
    getTasks(){
        return this.product;
    }

    getTask(id:Number){
      const task = this.product.find(t => t.id === id)
      if(!task){
        return{message:"Task Not Found"}
      }
        return task;
    }

    getTaskByStatus(status:string){
      if(status === "completed"){
        return this.product.filter(t => t.completed === true)
      }
      if(status === "pending"){
        return this.product.filter(t => t.completed === false)
      }
        return this.product;
    }

    getTaskBySearch(search:string){
      return this.product.filter(t => t.title.toLowerCase().includes(search.toLowerCase()))
    }

    createTask(body:any){
      const newTask = {
        userId:body.userId,
        id:this.product.length+1,
        title:body.title,
        completed:body.completed,
      }
      this.product.push(newTask)
      return newTask
    }

}