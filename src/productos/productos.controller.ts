/* eslint-disable prettier/prettier */
// productos.controller.ts

import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Product } from './productos.model';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}

    @Get()
    getAllProducts(): Product[] {
        return this.productosService.findAll();
    }

    @Get(':id')
    getProductById(@Param('id') id: string): Product {
        return this.productosService.findById(+id);
    }

    @Post()
    createProduct(@Body() productData: Product): Product {
        return this.productosService.create(productData);
    }

    @Patch(':id')
    updateProduct(@Param('id') id: string, @Body() productData: Partial<Product>): Product {
        return this.productosService.update(+id, productData);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string): void {
        this.productosService.delete(+id);
    }
}
