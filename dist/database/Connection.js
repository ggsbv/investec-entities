"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Connection = /** @class */ (function () {
    function Connection(config) {
        var _this = this;
        this.make = function () { return typeorm_1.createConnection(_this.config); };
        this.config = config;
    }
    return Connection;
}());
exports.Connection = Connection;
