import "reflect-metadata";
import { createConnection } from "typeorm";

export class Connection {
    config : any;

    constructor(config: any) {
        this.config = config;
    }

    make = () => createConnection(this.config);
}