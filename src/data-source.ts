import "reflect-metadata";
import { DataSource } from "typeorm";
import { FormEntity } from "./entities/forma";
import { NewsEntity } from "./entities/news";
import { AdminEntity } from "./entities/admin";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Pm2dPkDE%rEF",
  // password: "islom_01",
  database: "gdr_b",
  synchronize: true,
  logging: false,
  entities: [AdminEntity, NewsEntity, FormEntity],
  migrations: [],
  subscribers: [],
});
