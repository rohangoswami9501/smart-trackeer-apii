import { Injectable } from "@nestjs/common";
@Injectable()
export class productsService {
  
    private product =[
     {
      id: 1,
      name: 'Laptop',
      price: 55000,
    },
    {
      id: 2,
      name: 'Keyboard',
      price: 1500,
    },
    {
      id: 3,
      name: 'Mouse',
      price: 800,
    },
    {
      id: 4,
      name: 'Monitor',
      price: 12000,
    },
    {
      id: 5,
      name: 'Headphones',
      price: 2500,
    },
    ]

    getProduct(){
        return this.product;
    }

}