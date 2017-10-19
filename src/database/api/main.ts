import * as express from 'express';
import { json } from 'body-parser';
import cors from "./cors";
import errorHandler from "./errorHandler";
import config from "../config";
import { createConnection, getRepository } from "typeorm";
import { ParentEntity } from "../entities/ParentEntity";
import { ChildEntity } from "../entities/ChildEntity";

const api = express();

api.use(json());
api.use(cors);

createConnection(config);

api.get("/api/entities/parents", (req, res, next) => {
    getRepository(ParentEntity).find()
        .then((parentEntities) => res.json(parentEntities))
        .catch((err) => next(err));
});

api.get("/api/entities/parents/:id", (req, res, next) => {
    getRepository(ParentEntity).findOneById({ id: req.params.id }, { relations: ["children"] })
        .then((parentEntity) => res.json(parentEntity.children))
        .catch((err) => next(err));
});

api.get("/api/entities/:id/limits", (req, res, next) => {
    getRepository(ChildEntity).findOneById({ id: req.params.id }, { relations: ["limits"] })
        .then((childEntity) => res.json(childEntity.limits))
        .catch((err) => next(err));
});

errorHandler(api);

const port = process.env.PORT || 3006;

api.listen(port, () => console.log("application is running on port ", port));
