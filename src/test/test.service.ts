import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
import { Product } from '../entities/product.entity';
import { SubCategory } from '../entities/subCategory.entity';


@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(SubCategory)
    private subCategoryRepository: Repository<SubCategory>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async createTestData() {
    // Create a Category
    const category = this.categoryRepository.create({
      name: 'Electronics',
      description: 'All electronic devices',
    });
    await this.categoryRepository.save(category);

    // Create a SubCategory
    const subCategory = this.subCategoryRepository.create({
      name: 'Smartphones',
      description: 'Mobile phones and accessories',
      parentCategory: category, // Relates to Category
    });
    await this.subCategoryRepository.save(subCategory);

    // Create a Product
    const product = this.productRepository.create({
      name: 'iPhone 14',
      description: 'Latest Apple iPhone',
      summary: 'High-end smartphone',
      cover: 'iphone14.jpg',
      category: subCategory, // Relates to SubCategory
    });
    await this.productRepository.save(product);

    return { category, subCategory, product };
  }

  async getCategoriesWithSubCategoriesAndProducts() {
    return await this.categoryRepository.find({
      relations: ['subCategories', 'subCategories.products'],
    });
  }
}