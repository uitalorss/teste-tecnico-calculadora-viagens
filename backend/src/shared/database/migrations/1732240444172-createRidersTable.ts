import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRidersTable1732240444172 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "motoristas" ("id" SERIAL PRIMARY KEY, "nome" text NOT NULL, "descricao" text NOT NULL, "carro" text NOT NULL, "avaliacao" text NOT NULL, "taxa" text NOT NULL, "minimokm" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "motoristas"`);
    }

}
