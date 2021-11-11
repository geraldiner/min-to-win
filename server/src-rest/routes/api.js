const express = require("express");
const router = express.Router();
const apiController = require("../controller/api");

router.get("/api/games", apiController.getGames);
router.post("/api/games", apiController.postGames);
router.get("*", apiController.getIndex);

module.exports = router;
