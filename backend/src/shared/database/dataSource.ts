import "dotenv/config"
import { DataSource } from "typeorm";

const dbport = process.env.DB_PORT as unknown as number | undefined;

export const dataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: dbport,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: ["./src/modules/**/infra/entities/*.ts"],
    migrations: ["./src/shared/database/migrations/*.ts"]
});