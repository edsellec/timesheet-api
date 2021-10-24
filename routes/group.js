const express = require("express");
const router = express.Router();
const GroupController = require("../controllers/group");

router.get("/", GroupController.index);
router.post("/", GroupController.create);
router.get("/:id", GroupController.read);
router.put("/:id", GroupController.update);
router.delete("/:id", GroupController.destroy);

module.exports = router;
