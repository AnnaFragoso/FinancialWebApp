import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "financialapp",
  synchronize: false,
  logging: true,
  entities: [`${__dirname}/src/entities/*{.js,.ts}`],
  subscribers: [],
  migrations: [`${__dirname}/migrations/*{.js,.ts}`],
  migrationsRun: true
})