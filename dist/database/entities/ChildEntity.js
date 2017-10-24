"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var ParentEntity_1 = require("./ParentEntity");
var Limits_1 = require("./Limits");
var ChildEntity = /** @class */ (function () {
    function ChildEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], ChildEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int"),
        typeorm_1.Index({ unique: true }),
        __metadata("design:type", Number)
    ], ChildEntity.prototype, "entityId", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], ChildEntity.prototype, "name", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return ParentEntity_1.ParentEntity; }, function (parentEntity) { return parentEntity.children; }, {
            cascadeInsert: true,
            cascadeUpdate: true // Allow to update an album on photo save
        }),
        __metadata("design:type", ParentEntity_1.ParentEntity)
    ], ChildEntity.prototype, "parent", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Limits_1.Limit; }, function (limit) { return limit.entity; }),
        __metadata("design:type", Array)
    ], ChildEntity.prototype, "limits", void 0);
    ChildEntity = __decorate([
        typeorm_1.Entity()
    ], ChildEntity);
    return ChildEntity;
}());
exports.ChildEntity = ChildEntity;
