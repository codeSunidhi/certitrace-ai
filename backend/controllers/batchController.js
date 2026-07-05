const Batch = require("../models/Batch");

// GET all batches
exports.getBatches = async (req, res, next) => {
  try {
    const batches = await Batch.find();
    res.status(200).json(batches);
  } catch (error) {
    next(error);
  }
};

// GET single batch
exports.getBatch = async (req, res, next) => {
  try {
    const batch = await Batch.findById(req.params.id);

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found",
      });
    }

    res.status(200).json(batch);
  } catch (error) {
    next(error);
  }
};

// CREATE batch
exports.createBatch = async (req, res, next) => {
  try {
    const batch = await Batch.create(req.body);

    res.status(201).json(batch);
  } catch (error) {
    next(error);
  }
};

// UPDATE batch
exports.updateBatch = async (req, res, next) => {
  try {
    const batch = await Batch.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found",
      });
    }

    res.status(200).json(batch);
  } catch (error) {
    next(error);
  }
};

// DELETE batch
exports.deleteBatch = async (req, res, next) => {
  try {
    const batch = await Batch.findByIdAndDelete(req.params.id);

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found",
      });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

// SEARCH batches
exports.searchBatch = async (req, res, next) => {
  try {
    const q = req.query.q || "";

    const batches = await Batch.find({
      $or: [
        { plant: { $regex: q, $options: "i" } },
        { batchNumber: { $regex: q, $options: "i" } },
      ],
    });

    res.status(200).json(batches);
  } catch (error) {
    next(error);
  }
};