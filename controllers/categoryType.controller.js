var db = require("../models");

let categoryType = db.categoryType;
let allAttributes = db.allAttributes;
let AttributeOfCategoryType = db.attributesOfCategoryTypes;

let addCategoryType = async (req, res) => {
  const name = req.body.name;
  const attributes = req.body.attributes;
  try {
    // Create category Type

    let createdCategoryType = await categoryType.create({ name });

    const findAttributes = await Promise.all(
      attributes.map(async (attributeID) => {
        const result = await allAttributes.findByPk(attributeID);
        console.log(result);
        return result;
      })
    );
    console.log(findAttributes);
    if (findAttributes) {
      // show id from findAttributes one by one

      let sendID = findAttributes.map((attributeId) => ({
        categoryTypeId: createdCategoryType.id,
        attributeId: attributeId.id,
      }));
      let AttributeID = await AttributeOfCategoryType.bulkCreate(sendID);

      res.status(201).json({ data: { createdCategoryType, AttributeID } });
      return;
    }
    res.status(402).json({
      error: `Attribute type does not exist :${attributes.join(",")} `,
    });

    if (!attributes || attributes.length === 0) {
      // Respond with an error if the selected Attribute list is empty

      return res
        .status(401)
        .json({ error: "At least one attribute is required" });
    }
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

let getCategoryTypes = async (req, res) => {
  try {
    let data = await categoryType.findAll({});
    res.status(201).json({ data: data });
  } catch (error) {
    res.status(501).json({
      error: error.message,
    });
  }
};

let getCategoryType = async (req, res) => {
  try {
    let data = await categoryType.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ data: data });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

let deleteCategoryType = async (req, res) => {
  try {
    let data = await categoryType.truncate({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ data: data });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

module.exports = {
  addCategoryType,
  getCategoryTypes,
  getCategoryType,
  deleteCategoryType,
};
