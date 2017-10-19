"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParentEntity_1 = require("./entities/ParentEntity");
var ChildEntity_1 = require("./entities/ChildEntity");
var Limits_1 = require("./entities/Limits");
var config = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "investec_entities",
    entities: [
        ParentEntity_1.ParentEntity,
        ChildEntity_1.ChildEntity,
        Limits_1.Limit
    ],
    synchronize: true
};
exports.default = config;
