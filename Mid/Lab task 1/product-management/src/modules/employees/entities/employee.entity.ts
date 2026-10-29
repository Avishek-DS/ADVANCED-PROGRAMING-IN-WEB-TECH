import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// এই class টাই database-এর "employees" table
@Entity("employees")
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  password!: string;

  @Column("int")
  age!: number;

  // database-এ column-এর নাম হবে years_of_working (SnakeNamingStrategy)
  @Column("int")
  yearsOfWorking!: number;
}
