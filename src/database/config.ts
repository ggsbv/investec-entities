import { ParentEntity } from "./entities/ParentEntity";
import { ChildEntity } from "./entities/ChildEntity";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { Limit } from "./entities/Limits";

let config : MysqlConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "investec_entities",
    entities: [
        ParentEntity,
        ChildEntity,
        Limit
    ],
    synchronize: true
};

export default config;