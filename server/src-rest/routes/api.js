const express = require("express");
const router = express.Router();
const apiController = require("../controller/api");

router.get("/games", apiController.getGames);
router.get("/games/:gameId", apiController.getGame);
router.post("/games", apiController.postGames);

module.exports = router;
