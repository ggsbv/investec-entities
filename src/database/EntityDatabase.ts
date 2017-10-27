import { Connection } from "./Connection";
import { ExcelToJson } from "../ExcelToJson";

import { BankingEntity } from "./entities/BankingEntity";
import EntityService from "./EntityService";

export class EntityDatabase {
    protected connection: Connection;
    protected entityData: ExcelToJson;

    constructor(connection : Connection, excelSpreadsheetPath: string) {
        this.connection = connection;
        this.entityData = new ExcelToJson(excelSpreadsheetPath);
    }

    addEntities = () => {
        this.connection.make()
            .then(async (connection: any) => {
                let relationship: any;
                let entityService = EntityService(connection);

                for (relationship of this.entityData.relationships()) {
                    await entityService
                        .saveEntity(relationship["Parent Entity Id"], relationship["Parent Entity Name"]);

                    await entityService
                        .saveEntity(relationship["Entity Id"], relationship["Entity Name"]);
                }
            })
            .catch((error: any) => console.log(error));
    }
}