const allattributes = require("../models/allattributes");

db = require("../models");

var allAttributes = db.allAttributes;

let putAllAttributes = async (req, res) => {
  let postedAttributes = [
    { name: "Model" },
    { name: "Processor Speed" },
    { name: "Storage Capacity" },
    { name: "Screen Size" },
    { name: "Operating System" },
    { name: "Connectivity" },
    { name: "Features" },
    { name: "Size" },
    { name: "Color" },
    { name: "Material" },
    { name: "Style" },
    { name: "Fit" },
    { name: "Gender" },
    { name: "Closure Type" },
    { name: "Heel Height" },
    { name: "Product Type" },
    { name: "Ingredients" },
    { name: "Usage Instructions" },
    { name: "Skin Type" },
    { name: "Fragrance" },
    { name: "Manufactured Date" },
    { name: "Expiry Date" },
    { name: "Type" },
    { name: "Dimensions" },
    { name: "Title" },
    { name: "Author" },
    { name: "Director" },
    { name: "Artist" },
    { name: "Genre" },
    { name: "Format" },
    { name: "Publication Year" },
    { name: "Released Date" },
    { name: "Language" },
    { name: "Size Dimensions" },
    { name: "Age Range" },
    { name: "Certifications" },
    { name: "Ingredients" },
    { name: "Dosage Instructions" },
    { name: "Safety Instructions" },
    { name: "Expiry Date" },
    { name: "Calories" },
    { name: "Fats" },
    { name: "Proteins" },
    { name: "Carbohydrates" },
    { name: "Allergens" },
    { name: "Packaging Size" },
    { name: "Storage Instructions" },
    { name: "Part Number" },
    { name: "Compatibility" },
    { name: "Installation Instructions" },
    { name: "Specifications" },
    { name: "Gemstone" },
  ];

  try {
    let data = await allAttributes.bulkCreate(postedAttributes);
    res.status(201).json({ data: data });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

let getAllAttributes = async (req, res) => {
  try {
    let data = await allAttributes.findAll({});
    res.status(201).json({ data: data });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

let removeAllAttributes = async (req, res) => {
  try {
    let data = await allAttributes.truncate();
    res.status(201).json({ data: data });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

module.exports = {
  getAllAttributes,
  putAllAttributes,
  removeAllAttributes,
};
