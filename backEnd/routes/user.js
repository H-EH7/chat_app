const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

// GET /user
router.get("/", userController.get);

// POST /user
router.post("/", userController.post);

module.exports = router;
