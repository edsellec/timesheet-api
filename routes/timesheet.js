const express = require("express");
const router = express.Router();
const TimesheetController = require("../controllers/timesheet");
const { checkIfPermitted } = require("./../middleware/role.js");

router.get("/", checkIfPermitted("Admin"), TimesheetController.index);
router.post("/", TimesheetController.create);
router.get("/:id", TimesheetController.read);
router.put("/:id", TimesheetController.update);
router.delete("/:id", TimesheetController.destroy);

module.exports = router;
