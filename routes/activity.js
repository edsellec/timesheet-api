const express = require("express");
const router = express.Router();
const ActivityController = require("../controllers/activity");

router.get("/", ActivityController.index);
router.post("/", ActivityController.create);
router.get("/:id", ActivityController.read);
router.put("/:id", ActivityController.update);
router.delete("/:id", ActivityController.destroy);

module.exports = router;
