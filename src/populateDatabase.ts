import config from "./database/config";
import { Connection } from "./database/Connection";
import { EntityDatabase } from "./database/EntityDatabase";

let connection = new Connection(config);
let entityDatabase = new EntityDatabase(connection, "../codex.xlsx");

entityDatabase.addEntities();