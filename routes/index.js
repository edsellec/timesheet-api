const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/user");

router.get("/users/", UserController.index);
router.post("/users/", UserController.create);
router.get("/users/:id", UserController.read);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.destroy);

module.exports = router;
