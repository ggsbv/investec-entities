import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

import { BankingEntity } from "./entities/BankingEntity";
import { RelationshipType } from "./entities/RelationshipType";
import { Parent } from "./entities/Parent";
import { Child } from "./entities/Child";
import { Limit } from "./entities/Limits";

let config : MysqlConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "investec_entities",
    entities: [
        BankingEntity,
        RelationshipType,
        Parent,
        Child,
        // Limit
    ],
    synchronize: true
};

export default config;