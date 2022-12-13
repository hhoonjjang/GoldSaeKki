"use strict";

import Sequelize from "sequelize";

import User from "./user.js";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const configJson = require("../config/config.json");
const config = configJson["development"];

const db = { User };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

User.init(sequelize);

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;