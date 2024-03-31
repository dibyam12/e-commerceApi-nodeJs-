"use strict";

module.exports = (sequelize, DataTypes, Model) => {
  class allAttributes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      allAttributes.BelongsTo(models.AttributeOfCategoryType, {
        foreignKey: "attributeId",
      });
    }
  }
  allAttributes.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "allAttributes",
    }
  );
  return allAttributes;
};
