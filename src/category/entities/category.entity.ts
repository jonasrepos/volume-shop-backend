import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { SubCategory } from "../../subcategory/entities/subCategory.entity";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  description?: string;

  @CreateDateColumn({ name: 'created_at', type: "timestamp" })  // Explicitly set column name to `created_at`
  createdAt: Date;

  @Column({ name: 'deleted_at', type: "timestamp", nullable: true })  // Explicitly set column name to `deleted_at`
  deletedAt?: Date;

  @OneToMany(() => SubCategory, (subCategory) => subCategory.parentCategory, { cascade: true })
  subCategories: SubCategory[];
}