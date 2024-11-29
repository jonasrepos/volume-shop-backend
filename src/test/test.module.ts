import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { Category } from '../category/entities/category.entity';
import { SubCategory } from '../subcategory/entities/subCategory.entity';
import { Product } from '../product/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, SubCategory, Product]), // Registriere die Entities
  ],
  controllers: [TestController], // Binde den Controller ein
  providers: [TestService], // Binde den Service ein
})
export class TestModule { }
