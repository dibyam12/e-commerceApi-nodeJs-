"use strict";

// const fs = require("fs");
// const path = require("path");
const { Sequelize, DataTypes, Model } = require("sequelize");
// const process = require("process");
// const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const db = {};

let sequelize = new Sequelize("api", "root", null, {
  //added
  host: "localhost",
  dialect: "mysql",
});
try {
  //added
  sequelize.authenticate();
  console.log("connection has been established successfully");
} catch (error) {
  console.error("Unable to connect to  the database:", error);
}

db.category = require("./category")(sequelize, DataTypes, Model); // added
db.categoryType = require("./categorytype")(sequelize, DataTypes, Model); //added
db.allAttributes = require("./allattributes")(sequelize, DataTypes, Model); //added
db.attributesOfCategoryTypes = require("./attributeofcategorytype")(
  sequelize,
  DataTypes,
  Model
); //added

// db.category.belongsTo(db.categoryType, { as: "CategoryType" });
// db.categoryType.hasMany(db.allAttributes);

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 &&
//       file !== basename &&
//       file.slice(-3) === ".js" &&
//       file.indexOf(".test.js") === -1
//     );
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize.DataTypes
//     );
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync({ force: false }); //added

module.exports = db;
