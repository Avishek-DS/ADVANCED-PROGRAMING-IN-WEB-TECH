import { MigrationInterface, QueryRunner } from "typeorm";

// এই migration database-এ products ও employees table তৈরি করে
export class CreateProductsAndEmployees1761350400000
  implements MigrationInterface
{
  name = "CreateProductsAndEmployees1761350400000";

  // migration:run দিলে এটা চলে -> table তৈরি
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "products" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR NOT NULL,
        "category" VARCHAR NOT NULL,
        "price" DOUBLE PRECISION NOT NULL,
        "quantity" INTEGER NOT NULL
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "employees" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR NOT NULL,
        "email" VARCHAR NOT NULL,
        "phone" VARCHAR NOT NULL,
        "password" VARCHAR NOT NULL,
        "age" INTEGER NOT NULL,
        "years_of_working" INTEGER NOT NULL
      )
    `);
  }

  // migration:rollback দিলে এটা চলে -> table মুছে ফেলে
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "employees"`);
    await queryRunner.query(`DROP TABLE "products"`);
  }
}
