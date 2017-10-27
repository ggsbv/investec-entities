"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./database/config");
var Connection_1 = require("./database/Connection");
var EntityDatabase_1 = require("./database/EntityDatabase");
var connection = new Connection_1.Connection(config_1.default);
var entityDatabase = new EntityDatabase_1.EntityDatabase(connection, "../codex.xlsx");
entityDatabase.addEntities();
