"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ParentEntity_1 = require("./entities/ParentEntity");
var ChildEntity_1 = require("./entities/ChildEntity");
var Limits_1 = require("./entities/Limits");
var EntityService = function (connection) {
    var getLimits = function (limits, relationship, childEntity) {
        return __awaiter(this, void 0, void 0, function () {
            var limit, _i, limits_1, newLimit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, limits_1 = limits;
                        _a.label = 1;
                    case 1:
                        if (!(_i < limits_1.length)) return [3 /*break*/, 4];
                        limit = limits_1[_i];
                        if (!(Number(limit['Entity Id']) === Number(relationship['Entity Id']))) return [3 /*break*/, 3];
                        newLimit = new Limits_1.Limit();
                        newLimit.riskTakerGroupName = limit['Risk Taker Group Name'].trim();
                        newLimit.riskTakerName = limit['Risk Taker Name'].trim();
                        newLimit.facilityId = Number(limit['Facility Id']);
                        newLimit.facilityType = limit['Facility Type'];
                        newLimit.limitId = Number(limit['Limit Id']);
                        newLimit.limitType = limit['Limit Type'].trim();
                        newLimit.product = limit['Product'].trim();
                        newLimit.riskType = limit['Risk Type'].trim();
                        newLimit.currency = limit['Currency'].trim();
                        newLimit.exposureAmount = parseFloat(limit['Exposure Amount'].trim());
                        newLimit.totalCurrentLimit = Number(limit['Total Current Limit'].trim());
                        newLimit.totalApprovedLimit = Number(limit['Total Approved Limit'].trim());
                        newLimit.entity = childEntity;
                        return [4 /*yield*/, connection.manager.save(newLimit)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    var getParentEntity = function (relationship) {
        return __awaiter(this, void 0, void 0, function () {
            var parentEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection.getRepository(ParentEntity_1.ParentEntity).findOne({
                            entityId: Number(relationship['Parent Entity Id'])
                        })];
                    case 1:
                        parentEntity = _a.sent();
                        if (!parentEntity) {
                            parentEntity = new ParentEntity_1.ParentEntity();
                            parentEntity.name = relationship['Parent Entity Name'].trim();
                            parentEntity.entityId = Number(relationship['Parent Entity Id']);
                        }
                        return [4 /*yield*/, parentEntity];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var getChildWithLimits = function (limits, relationship, parentEntity) {
        return __awaiter(this, void 0, void 0, function () {
            var childEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection.getRepository(ChildEntity_1.ChildEntity).findOne({
                            entityId: Number(relationship['Entity Id'])
                        })];
                    case 1:
                        childEntity = _a.sent();
                        console.log(childEntity);
                        if (!!childEntity) return [3 /*break*/, 4];
                        childEntity = new ChildEntity_1.ChildEntity();
                        childEntity.name = relationship['Entity Name'].trim();
                        childEntity.entityId = Number(relationship['Entity Id']);
                        childEntity.parent = parentEntity;
                        return [4 /*yield*/, connection.manager.save(childEntity)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, getLimits(limits, relationship, childEntity)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, childEntity];
                }
            });
        });
    };
    return {
        getParentEntity: getParentEntity,
        getChildWithLimits: getChildWithLimits
    };
};
exports.default = EntityService;
