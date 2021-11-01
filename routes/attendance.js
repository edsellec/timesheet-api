const express = require("express");
const router = express.Router();
const AttendanceController = require("../controllers/attendance");
const { checkIfPermitted } = require("./../middleware/role.js");

router.get("/", checkIfPermitted("Admin"), AttendanceController.index);
router.post("/", AttendanceController.create);
router.get("/:id", AttendanceController.read);
router.put("/:id", AttendanceController.update);
router.delete("/:id", AttendanceController.destroy);

module.exports = router;
