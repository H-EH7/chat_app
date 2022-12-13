const express = require("express");

const testController = require("../controllers/test");

const router = express.Router();

// GET /root/get
router.get("/get", testController.getRoot);

// POST /root/post
router.post("/post", testController.postRoot);

module.exports = router;
