"use strict";

// const { FOREIGNKEYS } = require("sequelize/types/query-types");

module.exports = (sequelize, DataTypes, Model) => {
  class CategoryType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association heres
      CategoryType.HasMany(models.AttributeOfCategoryType, {
        foreignKey: "categoryTypeId",
      });
      CategoryType.HasMany(models.Category, {
        foreignKey: "categoryTypeName",
        sourceKey: "name",
      });
    }
  }
  CategoryType.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      //  attributes: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
    },
    {
      sequelize,
      modelName: "CategoryType",
    }
  );
  return CategoryType;
};
