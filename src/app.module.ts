import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';

import { TestModule } from './test/test.module';

import { Category } from './entities/category.entity';
import { SubCategory } from './entities/subCategory.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()), // Use the TypeOrm configuration
    TypeOrmModule.forFeature([Category, SubCategory]),       // Import the entities into this module
    TestModule,  // Your TestModule or other modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
