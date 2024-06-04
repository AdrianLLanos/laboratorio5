/* eslint-disable prettier/prettier */
// productos.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './productos.model';

@Injectable()
export class ProductosService {
    private productos0: Product[] = [
        { id: 1, nombre: 'Xiaomi 14 Ultra', categoria: 'Telefonos' },
        { id: 2, nombre: 'Xiaomi 14', categoria: 'Telefonos' },
        { id: 3, nombre: 'Xiaomi 13T', categoria: 'Telefonos' },
        { id: 4, nombre: 'Xiaomi 12T pro', categoria: 'Telefonos' },
        { id: 5, nombre: 'Xiaomi 12', categoria: 'Telefonos' }
    ];

    findAll(): Product[] {
        return this.productos0;
    }

    findById(id: number): Product {
        const product = this.productos0.find(prod => prod.id === id);
        if (!product) {
            throw new NotFoundException(`Producto con el id '${id}' no encontrado`);
        }
        return product;
    }

    create(productData: Product): Product {
        const newProductId = this.productos0.length + 1;
        const newProduct = { id: newProductId, ...productData };
        this.productos0.push(newProduct);
        return newProduct;
    }

    update(id: number, productData: Partial<Product>): Product {
        const index = this.productos0.findIndex(prod => prod.id === id);
        if (index === -1) {
            throw new NotFoundException(`Producto con el id '${id}' no encontrado`);
        }
        this.productos0[index] = { ...this.productos0[index], ...productData };
        return this.productos0[index];
    }

    delete(id: number): void {
        const index = this.productos0.findIndex(prod => prod.id === id);
        if (index === -1) {
            throw new NotFoundException(`Producto con el id '${id}' no encontrado`);
        }
        this.productos0.splice(index, 1);
    }
}
