const express = require("express");
const router = express.Router();
const departmentsController = require("../controllers/departmentsController");
const { authorize } = require("../middleware/authorization");
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  authorize("admin", "user"),
  departmentsController.getAllDepartments
);
router.get(
  "/getDepartment/:id",
  passport.authenticate("jwt", { session: false }),
  authorize("admin", "user"),
  departmentsController.getDepartment
);
router.post(
  "/createDepartment",
  passport.authenticate("jwt", { session: false }),
  authorize("admin"),
  departmentsController.createDepartment
);
router.put(
  "/updateDepartment/:id",
  passport.authenticate("jwt", { session: false }),
  authorize("admin"),
  departmentsController.updateDepartment
);
router.delete(
  "/deleteDepartment/:id",
  passport.authenticate("jwt", { session: false }),
  authorize("admin"),
  departmentsController.deleteDepartment
);

module.exports = router;
