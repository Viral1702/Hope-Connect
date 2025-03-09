const Category = require("../Models/categoryModel");

const addCategory = async (req, res) => {
  try {
    let { name } = req.body;
    name = name.trim(" ");
    const isExists = await Category.findOne({ name });

    if (isExists) {
      res.status(203).json({
        message: "Category name is existes",
      });
      return;
    }

    const newCategory = await Category.create({ name });
    res.status(200).json({
      message: "New Category Added Successfully",
      category: newCategory,
    });
  } catch (error) {
    console.log("Add Category Error: ", error);
    res.status(500).json({
      message: "Internal server Error..",
    });
  }
};

const getCategorys = async (_, res) => {
  try {
    const categorys = await Category.find({});
    res.status(200).json({
      categorys,
    });
  } catch (error) {
    console.log("Get Categorys Error: ", error);
    res.status(500).json({
      message: "Internal server Error..",
    });
  }
};

module.exports = { addCategory, getCategorys };
