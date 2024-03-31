"use strict";

module.exports = (sequelize, DataTypes, Model) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.BelongsTo(models.CategoryType, {
        foreignKey: "categoryTypeName",
        targetKey: "categoryTypeName",
      });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryType: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "CategoryType",
          key: "categoryTypeName",
        },
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
