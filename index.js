const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./models");

app.use(cors());
let categoryController = require("./controllers/category.controller");
let categoryTypeController = require("./controllers/categoryType.controller");
let allAttributesController = require("./controllers/allAttributes.controller");
let attributeofcategorytype = require("./controllers/attributeOf CategoryType.controller");

// app.use("/", function (req, res) {
//   res.send("Hello NOde");
// });

app.post("/add-category", categoryController.addCategory);
app.get("/categories", categoryController.getCategories);
app.get("/category/:id", categoryController.getCategory);

app.post("/add-categoryType", categoryTypeController.addCategoryType);
app.get("/all-categoryTypes", categoryTypeController.getCategoryTypes);
app.get("/category-type/:id", categoryTypeController.getCategoryType);
app.delete("/delete-categoryType", categoryTypeController.deleteCategoryType);

app.post("/all-attributes", allAttributesController.putAllAttributes);
app.get("/all-attributes", allAttributesController.getAllAttributes);
app.delete(
  "/delete-allAttributes",
  allAttributesController.removeAllAttributes
);
app.delete("/allData", attributeofcategorytype.deleteData);
app.get("/allData", attributeofcategorytype.getData);
const port = 3000;
app.listen(port, () => {
  console.log("app running on http://localhost:3000");
});
