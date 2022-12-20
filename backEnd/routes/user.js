const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

// GET /user/:id
router.get("/:id", userController.findById);

// POST /user
router.post("/", userController.registerUser);

// POST /user/login
router.post("/login", userController.logIn);

module.exports = router;
