const express = require("express");
const router = express.Router();
const authController = require("../controller/user-controller");
const { authMiddleware } = require("../middleware/user-middleware");

router.post("/login", authController.loginUser);
router.post("/signup", authController.addNewUser);
router.delete("/delete", authMiddleware, authController.deleteUser);

module.exports = router;