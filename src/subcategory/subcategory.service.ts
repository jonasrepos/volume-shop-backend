import { Injectable } from '@nestjs/common';
import { CreateSubcategoryDto } from './dto/create-Subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-Subcategory.dto';
import { Repository } from 'typeorm';
import { SubCategory } from './entities/Subcategory.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SubcategoryService {

  constructor(
    @InjectRepository(SubCategory)
    private readonly SubcategoryRepository: Repository<SubCategory>,
  ) { }

  create(createSubcategoryDto: CreateSubcategoryDto) {
    return 'This action adds a new Subcategory';
  }

  findAll() {
    return this.SubcategoryRepository.find();
  }

  findOne(id: number) {
    return this.SubcategoryRepository.findOne({ where: { id } });
  }

  update(id: number, updateSubcategoryDto: UpdateSubcategoryDto) {
    return `This action updates a #${id} Subcategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} Subcategory`;
  }
}
