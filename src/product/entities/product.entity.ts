import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { SubCategory } from "../../subcategory/entities/subCategory.entity";

@Entity("products")
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    description?: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    summary?: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    cover?: string;

    @Column({ name: 'category_id', type: "int", nullable: true })  // Explicitly set column name to `category_id`
    categoryId: number;

    @CreateDateColumn({ name: 'created_at', type: "timestamp" })  // Explicitly set column name to `created_at`
    createdAt: Date;

    @Column({ name: 'deleted_at', type: "timestamp", nullable: true })  // Explicitly set column name to `deleted_at`
    deletedAt?: Date;

    @ManyToOne(() => SubCategory, (subCategory) => subCategory.products)
    category: SubCategory;
}
