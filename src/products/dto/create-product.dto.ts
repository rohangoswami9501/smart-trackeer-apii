import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {

    @IsOptional()
    @IsIn(['low', 'medium', 'high'])
    priority?: string;

    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsOptional()
    @IsIn(['pending', 'completed'])
    status?: string;
}