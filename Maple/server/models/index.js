"use strict";

import Sequelize from "sequelize";

import User from "./user.js";
import Report from "./report.js";
import Admin from "./admin.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const configJson = require("../config/config.json");
const config = configJson["development"];

const db = { User, Report, Admin };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

User.init(sequelize);
Report.init(sequelize);
Admin.init(sequelize);
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
