var db = require("../models");
var Category = db.category;
let categoryType = db.categoryType;
// let allAttributes = db.allAttributes;
// let AttributeOfCategoryType = db.attributesOfCategoryTypes;

let addCategory = async (req, res) => {
  let postData = {
    name: req.body.name,
    category_Type: req.body.categoryType,
  };

  try {
    // Check if the specified categoryType exists
    const existingCategoryType = await categoryType.findOne({
      where: { name: postData.category_Type },
    });

    if (!existingCategoryType) {
      // Respond with an error if the categoryType doesn't exist
      return res.status(401).json({ error: "Invalid categoryType" });
    }
    const data = await Category.create({
      name: postData.name,
      categoryType: existingCategoryType.name,
    });

    res.status(201).json({ data: data });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

let getCategoryTypes = async (req, res) => {
  try {
    const data = await categoryType.findAll({});
    res.status(201).json({ data: data });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

let getCategories = async (req, res) => {
  try {
    const data = await Category.findAll({});
    res.status(201).json({ data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

let getCategory = async (req, res) => {
  try {
    const data = await Category.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addCategory,
  getCategory,
  getCategories,
  getCategoryTypes,
};
