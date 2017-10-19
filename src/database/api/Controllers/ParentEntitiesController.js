"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var ParentEntity_1 = require("../../entities/ParentEntity");
var ParentEntitiesController = /** @class */ (function () {
    function ParentEntitiesController() {
    }
    ParentEntitiesController.all = function (req, res, next) {
        typeorm_1.getRepository(ParentEntity_1.ParentEntity).find()
            .then(function (parentEntities) { return res.json(parentEntities); })
            .catch(function (err) { return next(err); });
    };
    return ParentEntitiesController;
}());
exports.ParentEntitiesController = ParentEntitiesController;
