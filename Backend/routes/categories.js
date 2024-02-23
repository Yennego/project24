const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesControllers");

router.get("/", categoriesController.getAllCategories);
router.get("/:id", categoriesController.getCategory);
router.post("/", categoriesController.createCategory);
router.put("/:id", categoriesController.updateCategory);
router.delete("/:id", categoriesController.deleteCategory);

module.exports = router;
