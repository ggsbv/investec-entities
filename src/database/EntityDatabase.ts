import { Connection } from "./Connection";
import { ParentEntity } from "./entities/ParentEntity";
import { ChildEntity } from "./entities/ChildEntity";
import { ExcelToJson } from "../ExcelToJson";
import { Limit } from "./entities/Limits";
import { getConnection, getRepository } from "typeorm";

interface JsonDataInterface {
    [ key : string ] : string
}

export class EntityDatabase {
    protected connection: any;

    constructor(connection : Connection) {
        this.connection = connection;
    }

    populate = (excelSpreadsheetPath: string) => {
        let entityData = new ExcelToJson(excelSpreadsheetPath);
        let parentEntity: ParentEntity | undefined;

        this.connection.make()
            .then(async (connection: any) => {
                /* @Andre each relationship object looks like this:
                {
                    "Parent Entity Id" : "210419",
                    "Parent Entity Name" : "AAA Bank",
                    "Relationship Type" : "SHARES-LIMIT",
                    "Entity Id" : "1290391"
                    "Entity Name" : "AAA Bank Ltd (London)"
                }
                */
                entityData.relationships().forEach(async (relationship: JsonDataInterface) => {
                    //check db to see if a Parent Entity exists that corresponds to the Parent Entity referenced
                    //in the current relationship object
                    //if it does exist, assign it to parentEntity variable for use later
                    parentEntity = await connection.getRepository(ParentEntity).findOne({
                        entityId: relationship['Entity Id']
                    });

                    //if the Parent Entity in the relationship object does not exist in the DB yet, create it and
                    //assign it to parentEntity variable
                    if (! parentEntity) {
                        parentEntity = new ParentEntity();
                        parentEntity.name = relationship['Parent Entity Name'].trim();
                        parentEntity.entityId = Number(relationship['Parent Entity Id']);
                    }

                    //create a child entity using the information from the relationship object. The parent of the
                    //child entity will be stored in the "parentEntity" variable
                    //save the childEntity. The parentEntity will automatically be saved because we set the Child Entity
                    //to cascade upon save.
                    let childEntity = new ChildEntity();
                    childEntity.name = relationship['Entity Name'].trim();
                    childEntity.entityId = Number(relationship['Entity Id']);
                    childEntity.parent = parentEntity;
                    await connection.manager.save(childEntity);

                    //find all limits that belong to this child entity. If found, the limit becomes the child of the
                    //child entity.
                    entityData.limits().forEach(async (limit: JsonDataInterface) => {
                        if (Number(limit['Entity Id']) === Number(relationship['Entity Id'])) {
                            let newLimit = new Limit();
                            // newLimit.entityId = Number(limit['Entity Id']);
                            newLimit.riskTakerGroupName = limit['Risk Taker Group Name'].trim();
                            newLimit.riskTakerName = limit['Risk Taker Name'].trim();
                            newLimit.facilityId = Number(limit['Facility Id']);
                            newLimit.facilityType = limit['Facility Type'];
                            newLimit.limitId = Number(limit['Limit Id']);
                            newLimit.limitType = limit['Limit Type'].trim();
                            newLimit.product = limit['Product'].trim();
                            newLimit.entity = childEntity;
                            await connection.manager.save(newLimit);
                        }
                    });
                });
            })
            .catch((error: any) => console.log(error));
    }
}