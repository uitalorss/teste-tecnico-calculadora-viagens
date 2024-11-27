import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRideTable1732712559081 implements MigrationInterface {
    name = 'CreateRideTable1732712559081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rides" ("id" SERIAL NOT NULL, "customer_id" text NOT NULL, "origin" text NOT NULL, "destination" text NOT NULL, "distance" integer NOT NULL, "duration" text NOT NULL, "driver" integer NOT NULL, "value" numeric NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_ca6f62fc1e999b139c7f28f07fd" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "rides"`);
    }

}
