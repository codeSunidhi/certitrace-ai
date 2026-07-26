const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

const {
  getBatches,
  getBatch,
  createBatch,
  updateBatch,
  deleteBatch,
  searchBatch,
} = require("../controllers/batchController");

// Get all batches
router.get("/", verifyToken, getBatches);

// Search batches
router.get("/search", verifyToken, searchBatch);

// Get single batch
router.get("/:id", verifyToken, getBatch);

// Create batch
router.post("/", verifyToken, createBatch);

// Update batch
router.put("/:id", verifyToken, updateBatch);

// Delete batch
router.delete("/:id", verifyToken, deleteBatch);

module.exports = router;