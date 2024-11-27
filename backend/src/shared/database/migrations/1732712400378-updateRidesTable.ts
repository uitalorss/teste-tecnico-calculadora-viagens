import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRidesTable1732712400378 implements MigrationInterface {
    name = 'UpdateRidesTable1732712400378'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rides" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rides" DROP COLUMN "created_at"`);
    }

}
