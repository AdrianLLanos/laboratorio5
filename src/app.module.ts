/* eslint-disable prettier/prettier */
// src/app.module.ts

import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';

@Module({
    imports: [ProductosModule],
})
export class AppModule {}
