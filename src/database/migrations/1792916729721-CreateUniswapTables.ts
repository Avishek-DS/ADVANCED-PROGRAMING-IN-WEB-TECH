import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUniswapTables1792916729721 implements MigrationInterface {
    name = 'CreateUniswapTables1792916729721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "students" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "university" character varying NOT NULL, "department" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_25985d58c714a4a427ced57507b" UNIQUE ("email"), CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "item_id" integer NOT NULL, "buyer_id" integer NOT NULL, "meetup_location" character varying NOT NULL, "payment_method" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'Pending', "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "items" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" text, "category" character varying NOT NULL, "course_code" character varying NOT NULL, "condition" character varying NOT NULL, "price" double precision NOT NULL, "seller_id" integer NOT NULL, "is_available" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "students"`);
    }

}
