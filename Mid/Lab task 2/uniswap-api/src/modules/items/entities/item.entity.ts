import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

// Item: বিক্রির জন্য দেওয়া বই বা project component
@Entity("items")
export class Item {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ type: "text", nullable: true })
  description!: string | null;

  // "Book" অথবা "Component"
  @Column()
  category!: string;

  // কোন course-এর জিনিস, যেমন CSE101
  @Column()
  courseCode!: string;

  // "New", "Like New", "Used"
  @Column()
  condition!: string;

  @Column("float")
  price!: number;

  // কোন student বিক্রি করছে (students table-এর id)
  @Column("int")
  sellerId!: number;

  @Column({ default: true })
  isAvailable!: boolean;

  @CreateDateColumn()
  createdAt!: Date;
}
