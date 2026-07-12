const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

const requireAuth = require("../middleware/authMiddleware");

const {
  getBatches,
  getBatch,
  createBatch,
  updateBatch,
  deleteBatch,
  searchBatch,
} = require("../controllers/batchController");

router.get("/", verifyToken, getBatches);

router.get("/search", verifyToken, searchBatch);

router.get("/:id", verifyToken, getBatch);

router.post("/", verifyToken, createBatch);

router.put("/:id", verifyToken, updateBatch);

router.delete("/:id", verifyToken, deleteBatch);

module.exports = router;