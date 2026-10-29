import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// এই class টাই database-এর "products" table
@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  category!: string;

  @Column("float")
  price!: number;

  @Column("int")
  quantity!: number;
}
