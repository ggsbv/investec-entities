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
var ChildEntity_1 = require("./ChildEntity");
var Limit = /** @class */ (function () {
    function Limit() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Limit.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], Limit.prototype, "riskTakerGroupName", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], Limit.prototype, "riskTakerName", void 0);
    __decorate([
        typeorm_1.Column("int"),
        __metadata("design:type", Number)
    ], Limit.prototype, "facilityId", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], Limit.prototype, "facilityType", void 0);
    __decorate([
        typeorm_1.Column("int"),
        __metadata("design:type", Number)
    ], Limit.prototype, "limitId", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], Limit.prototype, "limitType", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], Limit.prototype, "product", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return ChildEntity_1.ChildEntity; }, function (childEntity) { return childEntity.limits; }, {
            cascadeInsert: true,
            cascadeUpdate: true // Allow to update an album on photo save
        }),
        __metadata("design:type", ChildEntity_1.ChildEntity)
    ], Limit.prototype, "entity", void 0);
    Limit = __decorate([
        typeorm_1.Entity()
    ], Limit);
    return Limit;
}());
exports.Limit = Limit;
