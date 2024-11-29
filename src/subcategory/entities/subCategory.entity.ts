import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Category } from "../../category/entities/category.entity";
import { Product } from "../../product/entities/product.entity";


@Entity("sub_categories")
export class SubCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'parent_id', type: "int" })  // Explicitly set column name to `parent_id`
  parentId: number;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  description?: string;

  @CreateDateColumn({ name: 'created_at', type: "timestamp" })  // Explicitly set column name to `created_at`
  createdAt: Date;

  @Column({ name: 'deleted_at', type: "timestamp", nullable: true })  // Explicitly set column name to `deleted_at`
  deletedAt?: Date;

  @ManyToOne(() => Category, (category) => category.subCategories)
  @JoinColumn({ name: 'parent_id' })
  parentCategory: Category;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
