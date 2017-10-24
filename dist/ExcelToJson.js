"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XLSX = require("xlsx");
var ExcelToJson = /** @class */ (function () {
    function ExcelToJson(fileName) {
        var _this = this;
        this.relationships = function () { return _this.entityRelationshipsData; };
        this.limits = function () { return _this.entityLimitsData; };
        var workbook = XLSX.readFile(fileName);
        this.entityRelationshipsData = XLSX.utils.sheet_to_json(workbook.Sheets['Entity Relationships']);
        this.entityLimitsData = XLSX.utils.sheet_to_json(workbook.Sheets['Entity Limits']);
    }
    return ExcelToJson;
}());
exports.ExcelToJson = ExcelToJson;
