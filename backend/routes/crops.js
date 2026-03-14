const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
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
});

module.exports = router;
