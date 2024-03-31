"use strict";

module.exports = (sequelize, DataTypes, Model) => {
  class AttributeOfCategoryType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AttributeOfCategoryType.BelongsTo(models.categoryType, {
        foreignKey: "categoryTypeId",
      });
      AttributeOfCategoryType.BelongsTo(models.allAttributes, {
        foreignKey: "attributeId",
      });
    }
  }
  AttributeOfCategoryType.init(
    {
      categoryTypeId: { type: DataTypes.INTEGER, allowNull: false },
      attributeId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "attributeOfCategoryType",
    }
  );
  return AttributeOfCategoryType;
};
