import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {

  @Prop({ required: true, unique: true, default: uuidv4 })
  id!: string;

  @Prop({ required: true })
  title!: string;

  @Prop({ enum: ['pending', 'completed'], default: 'pending' })
  status!: string;

  @Prop({ enum: ['low', 'medium', 'high'], default: 'medium' })
  priority!: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);