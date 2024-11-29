import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';

import { TestModule } from './test/test.module';

import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { SubcategoryModule } from './subcategory/subcategory.module';


@Module({
  imports: [
    DatabaseModule,
    TestModule,
    ProductModule,
    CategoryModule,
    SubcategoryModule,  // Your TestModule or other modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
