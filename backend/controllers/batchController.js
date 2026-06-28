const batches = require("../data/batches");

// GET all
exports.getBatches = (req, res) => {
  res.status(200).json(batches);
};

// GET by ID
exports.getBatch = (req, res) => {
  const batch = batches.find(b => b.id == req.params.id);

  if (!batch)
    return res.status(404).json({ message: "Batch not found" });

  res.status(200).json(batch);
};

// POST
exports.createBatch = (req, res) => {
  const newBatch = {
    id: batches.length + 1,
    ...req.body
  };

  batches.push(newBatch);

  res.status(201).json(newBatch);
};

// PUT
exports.updateBatch = (req, res) => {
  const batch = batches.find(b => b.id == req.params.id);

  if (!batch)
    return res.status(404).json({ message: "Batch not found" });

  Object.assign(batch, req.body);

  res.status(200).json(batch);
};

// DELETE
exports.deleteBatch = (req, res) => {
  const index = batches.findIndex(b => b.id == req.params.id);

  if (index === -1)
    return res.status(404).json({ message: "Batch not found" });

  batches.splice(index, 1);

  res.status(204).send();
};

// SEARCH
exports.searchBatch = (req, res) => {
  try {
    const q = (req.query.q || "").toLowerCase();

    const result = batches.filter(
      (batch) =>
        batch.plant.toLowerCase().includes(q) ||
        batch.batchNumber.toLowerCase().includes(q)
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};