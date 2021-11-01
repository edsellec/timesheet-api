const express = require("express");
const router = express.Router();
const ActivityController = require("../controllers/activity");
const { checkIfPermitted } = require("./../middleware/role.js");

router.get("/", checkIfPermitted("Admin"), ActivityController.index);
router.post("/", checkIfPermitted("Admin"), ActivityController.create);
router.get("/:id", ActivityController.read);
router.put("/:id", ActivityController.update);
router.delete("/:id", ActivityController.destroy);

module.exports = router;
