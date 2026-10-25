import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

// Student: যে ছাত্র Uniswap-এ জিনিস বিক্রি বা কেনে
@Entity("students")
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  phone!: string;

  @Column()
  university!: string;

  @Column()
  department!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
