const express = require("express");
const cropsRoutes = require("./routes/crops");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Farm Data Management API is running 🌱");
});

app.use("/crops", cropsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
