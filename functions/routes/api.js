const express = require("express");
const router = express.Router();
const apiController = require("../controller/api");

router.get("/", apiController.getIndex);
router.get("/games", apiController.getGames);
router.post("/games", apiController.postGames);

module.exports = router;
