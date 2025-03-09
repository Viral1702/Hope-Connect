const { Router } = require("express");
const {
  addCategory,
  getCategorys,
} = require("../Controllers/categoryController");

const CategoryRouter = Router();

CategoryRouter.post("/add-category", addCategory);
CategoryRouter.get("/get-category", getCategorys);

module.exports = CategoryRouter;
