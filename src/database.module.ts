import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';  // <-- Add this import
import { Product } from './product/entities/product.entity';
import { Category } from './category/entities/category.entity';
import { SubCategory } from './subcategory/entities/subCategory.entity';

@Module({
  imports: [
    ConfigModule.forRoot(), // <-- This is correct usage
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Product, Category, SubCategory],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product, Category, SubCategory]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule { }