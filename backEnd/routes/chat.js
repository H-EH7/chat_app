const express = require("express");

const chatController = require("../controllers/chat");

const router = express.Router();

// GET /chat/:id
router.get("/:id", chatController.findMessagesById);

// POST /chat
router.post("/", chatController.newChat);

// PATCH /chat/:id
router.patch("/:id", chatController.sendMessage);

module.exports = router;
