import * as XLSX from 'xlsx';
import { WorkBook } from "xlsx";

export class ExcelToJson {
    entityRelationshipsData : Array<object>;
    entityLimitsData : Array<object>;

    constructor(fileName : string) {
        let workbook : WorkBook = XLSX.readFile(fileName);
        this.entityRelationshipsData = XLSX.utils.sheet_to_json(workbook.Sheets['Entity Relationships']);
        this.entityLimitsData = XLSX.utils.sheet_to_json(workbook.Sheets['Entity Limits']);
    }

    relationships = () => this.entityRelationshipsData;

    limits = () => this.entityLimitsData;
}