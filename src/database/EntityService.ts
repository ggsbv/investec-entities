import { ParentEntity } from "./entities/ParentEntity";
import { ChildEntity } from "./entities/ChildEntity";
import { Limit } from "./entities/Limits";

const EntityService = function (connection: any) {

    const getLimits = async function (limits: any, relationship:any, childEntity: ChildEntity) {
        let limit: any;

        for (limit of limits) {
            if (Number(limit['Entity Id']) === Number(relationship['Entity Id'])) {
                let newLimit = new Limit();

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

                await connection.manager.save(newLimit);
            }
        }
    };

    const getParentEntity = async function (relationship: any): Promise<ParentEntity> {
        let parentEntity: ParentEntity | undefined = await connection.getRepository(ParentEntity).findOne({
            entityId: Number(relationship['Parent Entity Id'])
        });

        if (! parentEntity) {
            parentEntity = new ParentEntity();
            parentEntity.name = relationship['Parent Entity Name'].trim();
            parentEntity.entityId = Number(relationship['Parent Entity Id']);
        }

        return await parentEntity;
    };

    const getChildWithLimits = async function (
        limits: any,
        relationship: any,
        parentEntity: ParentEntity
    ): Promise<ChildEntity> {

        let childEntity: ChildEntity | undefined = await connection.getRepository(ChildEntity).findOne({
            entityId: Number(relationship['Entity Id'])
        });

        console.log(childEntity);

        if (! childEntity) {
            childEntity = new ChildEntity();

            childEntity.name = relationship['Entity Name'].trim();
            childEntity.entityId = Number(relationship['Entity Id']);
            childEntity.parent = parentEntity;

            await connection.manager.save(childEntity);

            await getLimits(limits, relationship, childEntity);
        }

        return childEntity;
    };

    return {
        getParentEntity,
        getChildWithLimits
    }
};

export default EntityService;