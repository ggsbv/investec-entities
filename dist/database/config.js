"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankingEntity_1 = require("./entities/BankingEntity");
var RelationshipType_1 = require("./entities/RelationshipType");
var Parent_1 = require("./entities/Parent");
var Child_1 = require("./entities/Child");
var config = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "investec_entities",
    entities: [
        BankingEntity_1.BankingEntity,
        RelationshipType_1.RelationshipType,
        Parent_1.Parent,
        Child_1.Child,
    ],
    synchronize: true
};
exports.default = config;
