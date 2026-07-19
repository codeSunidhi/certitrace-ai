const express = require("express");

const router = express.Router();

const { analyzeBatch } = require("../controllers/aiController");

router.post("/analyze", analyzeBatch);

module.exports = router;