"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var body_parser_1 = require("body-parser");
var cors_1 = require("./cors");
var errorHandler_1 = require("./errorHandler");
var config_1 = require("../config");
var typeorm_1 = require("typeorm");
var BankingEntity_1 = require("../entities/BankingEntity");
var ChildEntity_1 = require("../entities/ChildEntity");
var api = express();
api.use(body_parser_1.json());
api.use(cors_1.default);
typeorm_1.createConnection(config_1.default);
api.get("/api/entities/parents", function (req, res, next) {
    typeorm_1.getRepository(BankingEntity_1.ParentEntity).find()
        .then(function (parentEntities) { return res.json(parentEntities); })
        .catch(function (err) { return next(err); });
});
api.get("/api/entities/parents/:id", function (req, res, next) {
    typeorm_1.getRepository(BankingEntity_1.ParentEntity).findOneById({ id: req.params.id }, { relations: ["children"] })
        .then(function (parentEntity) { return res.json(parentEntity.children); })
        .catch(function (err) { return next(err); });
});
api.get("/api/entities/:id/limits", function (req, res, next) {
    typeorm_1.getRepository(ChildEntity_1.ChildEntity).findOne({
        relations: ['limits'],
        where: {
            entityId: Number(req.params.id)
        }
    })
        .then(function (childEntity) { return res.json(childEntity.limits); })
        .catch(function (err) { return next(err); });
});
errorHandler_1.default(api);
var port = process.env.PORT || 3006;
api.listen(port, function () { return console.log("application is running on port ", port); });
