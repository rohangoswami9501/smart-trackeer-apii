import { Injectable } from "@nestjs/common";
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
    getProduct(){
        return this.product;
    }

}