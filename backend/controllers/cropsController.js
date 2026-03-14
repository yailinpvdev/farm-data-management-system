const getCrops = (req, res) => {
  res.json([
    {
      id: 1,
      name: "Corn",
      type: "Grain",
      plantingDate: "2026-03-01",
      status: "Growing",
      estimatedProduction: "2000 kg",
    },
  ]);
};

const getCropById = (req, res) => {
  const id = req.params.id;

  const crop = {
    id: id,
    name: "Corn",
    type: "Grain",
    plantingDate: "2026-03-01",
    status: "Growing",
    estimatedProduction: "2000 kg",
  };

  res.json(crop);
};

const createCrop = (req, res) => {
  const newCrop = req.body;

  res.status(201).json({
    message: "Crop created successfully",
    data: newCrop,
  });
};

module.exports = {
  getCrops,
  getCropById,
  createCrop,
};
