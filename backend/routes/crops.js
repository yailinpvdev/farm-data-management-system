const express = require("express");
const router = express.Router();

const { getCrops } = require("../controllers/cropsController");

router.get("/", getCrops);

module.exports = router;
