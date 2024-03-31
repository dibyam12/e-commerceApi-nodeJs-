var db = require("../models");
//const attributeofcategorytype = require("../models/attributeofcategorytype");

attributeofcategorytype = db.attributesOfCategoryTypes;

let getData = async (req, res) => {
  try {
    let data = await attributeofcategorytype.findAll();
    res.status(201).json({ data: data });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};
let deleteData = async (req, res) => {
  try {
    let data = await attributeofcategorytype.truncate({
      /*  where: {
          id: req.params.id,
        }, */
    });
    res.status(201).json({ data: data });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

module.exports = {
  getData,
  deleteData,
};
