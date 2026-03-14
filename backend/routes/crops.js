const express = require("express");
const router = express.Router();

const {
  getCrops,
  getCropById,
  createCrop,
} = require("../controllers/cropsController");

router.get("/", getCrops);
router.get("/:id", getCropById);
router.post("/", createCrop);

module.exports = router;
