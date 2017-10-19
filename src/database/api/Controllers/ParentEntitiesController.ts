import { getRepository, Repository } from "typeorm";
import { ParentEntity } from "../../entities/ParentEntity";

export class ParentEntitiesController {
    constructor() {}

    static all = (req, res, next) => {
        getRepository(ParentEntity).find()
            .then((parentEntities) => res.json(parentEntities))
            .catch((err) => next(err));
    }
}