const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

router.get("/", UserController.index);
router.post("/", UserController.create);
router.get("/:id", UserController.read);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.destroy);

module.exports = router;
