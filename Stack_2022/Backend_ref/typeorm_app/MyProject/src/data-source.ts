import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "sagar6699",
    database: "bank_data",
    synchronize: true,
    logging: true,
    entities: ['src/entities/**/*.{ts, js}'],
    subscribers: [],
    migrations: [],
})
