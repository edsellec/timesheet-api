const express = require("express");
const router = express.Router();
const GroupController = require("../controllers/group");
const { checkIfPermitted } = require("./../middleware/role.js");

router.get("/", checkIfPermitted("Admin"), GroupController.index);
router.post("/", checkIfPermitted("Admin"), GroupController.create);
router.get("/:id", GroupController.read);
router.put("/:id", GroupController.update);
router.delete("/:id", GroupController.destroy);

module.exports = router;
