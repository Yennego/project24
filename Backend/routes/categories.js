const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");

router.get("/", categoriesController.getAllCategories);
router.get("/getCategory/:id", categoriesController.getCategory);
router.post("/createCategory", categoriesController.createCategory);
router.put("/updateCategory:id", categoriesController.updateCategory);
router.delete("/deleteCategory:id", categoriesController.deleteCategory);

module.exports = router;
