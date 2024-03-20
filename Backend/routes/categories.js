const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");
const { authorize } = require("../middleware/authorization");
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  authorize("admin", "user"),
  categoriesController.getAllCategories
);
router.get(
  "/getCategory/:id",
  passport.authenticate("jwt", { session: false }),
  authorize("admin", "user"),
  categoriesController.getCategory
);
router.post(
  "/createCategory",
  passport.authenticate("jwt", { session: false }),
  authorize("admin"),
  categoriesController.createCategory
);
router.put(
  "/updateCategory/:id",
  passport.authenticate("jwt", { session: false }),
  authorize("admin", "user"),
  categoriesController.updateCategory
);
router.delete(
  "/deleteCategory/:id",
  passport.authenticate("jwt", { session: false }),
  authorize("admin"),
  categoriesController.deleteCategory
);

module.exports = router;
