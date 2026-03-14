const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Farm Data Management API is running 🌱");
});

app.get("/crops", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
