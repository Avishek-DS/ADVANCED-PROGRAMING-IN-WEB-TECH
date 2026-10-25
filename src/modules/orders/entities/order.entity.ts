import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

// Order: একজন student আরেকজনের item কেনার অনুরোধ
@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  // কোন item কেনা হচ্ছে (items table-এর id)
  @Column("int")
  itemId!: number;

  // কে কিনছে (students table-এর id)
  @Column("int")
  buyerId!: number;

  // ক্যাম্পাসে কোথায় দেখা করে হাতবদল হবে
  @Column()
  meetupLocation!: string;

  // "Cash" অথবা "bKash"
  @Column()
  paymentMethod!: string;

  // "Pending", "Completed", "Cancelled"
  @Column({ default: "Pending" })
  status!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
