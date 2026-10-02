import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { config } from 'process';

@Module({
  imports: [ProductsModule,
    ConfigModule.forRoot({isGlobal:true}),
    MongooseModule.forRootAsync({
      inject:[ConfigService],
      useFactory:(config:ConfigService)=>({
        uri:config.get<string>("MONGO_URI")

 
      })
    })
  ],
})

export class AppModule {}