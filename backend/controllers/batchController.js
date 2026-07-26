const Batch = require("../models/Batch");

// GET all batches for logged-in user
exports.getBatches = async (req, res, next) => {
  try {
    const batches = await Batch.find({
      user: req.user.id,
    });

    res.status(200).json(batches);
  } catch (error) {
    next(error);
  }
};

// GET single batch for logged-in user
exports.getBatch = async (req, res, next) => {
  try {
    const batch = await Batch.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

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

// CREATE batch for logged-in user
exports.createBatch = async (req, res, next) => {
  try {
    const batch = await Batch.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(batch);
  } catch (error) {
    next(error);
  }
};

// UPDATE batch belonging to logged-in user
exports.updateBatch = async (req, res, next) => {
  try {
    const batch = await Batch.findOneAndUpdate(
  {
    _id: req.params.id,
    user: req.user.id,
  },
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

// DELETE batch belonging to logged-in user
exports.deleteBatch = async (req, res, next) => {
  try {
    const batch = await Batch.findOneAndDelete({
  _id: req.params.id,
  user: req.user.id,
});

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

// SEARCH batches belonging to logged-in user
exports.searchBatch = async (req, res, next) => {
  try {
    const q = req.query.q || "";

    const batches = await Batch.find({
      user: req.user.id,
      $or: [
        {
          plant: {
            $regex: q,
            $options: "i",
          },
        },
        {
          batchNumber: {
            $regex: q,
            $options: "i",
          },
        },
      ],
    }).sort({ createdAt: -1 });

    res.status(200).json(batches);
  } catch (error) {
    next(error);
  }
};