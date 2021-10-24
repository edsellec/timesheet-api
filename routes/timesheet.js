const express = require("express");
const router = express.Router();
const TimesheetController = require("../controllers/timesheet");

router.get("/", TimesheetController.index);
router.post("/", TimesheetController.create);
router.get("/:id", TimesheetController.read);
router.put("/:id", TimesheetController.update);
router.delete("/:id", TimesheetController.destroy);

module.exports = router;
