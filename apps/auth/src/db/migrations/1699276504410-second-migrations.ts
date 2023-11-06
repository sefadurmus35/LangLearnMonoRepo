import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMigrations1699276504410 implements MigrationInterface {
    name = 'SecondMigrations1699276504410'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "firstName" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "name" TO "firstName"`);
    }

}
