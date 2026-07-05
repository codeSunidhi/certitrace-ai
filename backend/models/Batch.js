const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    batchNumber: {
      type: String,
      required: true,
    },
    plant: {
      type: String,
      required: true,
    },
    harvestDate: {
      type: String,
      required: true,
    },
    certificate: {
      type: String,
      required: true,
    },
    dispatch: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Batch", batchSchema);