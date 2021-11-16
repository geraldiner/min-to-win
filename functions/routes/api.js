const express = require("express");
const router = express.Router();
const apiController = require("../controller/api");

router.get("/", apiController.getIndex);
router.get("/games", apiController.getGames);
router.get("/games/:gameId", apiController.getGameById);
router.post("/games", apiController.postGame);

module.exports = router;
