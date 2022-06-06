import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1654473331646 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "active",
                        type: "boolean",
                        isNullable: false
                    },
                    {
                        name: "linkId",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                        isNullable: true
                    },
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }

}
