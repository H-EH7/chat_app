const express = require("express");

const chatController = require("../controllers/chat");

const router = express.Router();

// GET /chat
router.get("/", chatController.get);

// POST /chat
router.post("/", chatController.post);

module.exports = router;
