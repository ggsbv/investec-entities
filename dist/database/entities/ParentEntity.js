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
var BankingEntity = /** @class */ (function () {
    function BankingEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], BankingEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int"),
        typeorm_1.Index({ unique: true }),
        __metadata("design:type", Number)
    ], BankingEntity.prototype, "entityId", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], BankingEntity.prototype, "name", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return ChildEntity_1.ChildEntity; }, function (childEntity) { return childEntity.parent; }),
        __metadata("design:type", Array)
    ], BankingEntity.prototype, "children", void 0);
    BankingEntity = __decorate([
        typeorm_1.Entity()
    ], BankingEntity);
    return BankingEntity;
}());
exports.BankingEntity = BankingEntity;
