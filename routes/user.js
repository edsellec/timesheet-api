const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const { checkIfPermitted } = require("./../middleware/role.js");

router.get("/", checkIfPermitted("Admin"), UserController.index);
router.post("/", checkIfPermitted("Admin"), UserController.create);
router.get("/:id", UserController.read);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.destroy);

module.exports = router;
