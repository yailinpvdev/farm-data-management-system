const express = require("express");
const router = express.Router();

const {
  getCrops,
  getCropById,
  createCrop,
  updateCrop,
} = require("../controllers/cropsController");

router.get("/", getCrops);
router.get("/:id", getCropById);
router.post("/", createCrop);
router.put("/:id", updateCrop);

module.exports = router;
