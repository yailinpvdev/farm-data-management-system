const express = require("express");
const router = express.Router();

const {
  getCrops,
  getCropById,
  createCrop,
  updateCrop,
  deleteCrop,
} = require("../controllers/cropsController");

router.get("/", getCrops);
router.get("/:id", getCropById);
router.post("/", createCrop);
router.put("/:id", updateCrop);
router.delete("/:id", deleteCrop);

module.exports = router;
