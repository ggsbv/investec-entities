import { Connection } from "./Connection";
import { ExcelToJson } from "../ExcelToJson";

import EntityService from './EntityService';

export class EntityDatabase {
    protected connection: any;

    constructor(connection : Connection) {
        this.connection = connection;
    }

    populate = (excelSpreadsheetPath: string) => {
        let entityData = new ExcelToJson(excelSpreadsheetPath);

        this.connection.make()
            .then(async (connection: any) => {
                let entityService = EntityService(connection);
                let relationship: any;

                for (relationship of entityData.relationships()) {
                    let parentEntity = await entityService.getParentEntity(relationship);

                    let childEntity = await entityService
                        .getChildWithLimits(entityData.limits(), relationship, parentEntity);
                }
            })
            .catch((error: any) => console.log(error));
    }
}