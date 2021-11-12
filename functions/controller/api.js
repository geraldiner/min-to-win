const Game = require("../models/Game");

module.exports = {
	getGames: async (req, res) => {
		const limit = parseInt(req.query.limit) || 20;
		try {
			const games = await Game.find().limit(limit);
			res.status(200).json({
				success: true,
				data: games,
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "Something went wrong",
				error,
			});
		}
	},
	getGame: async (req, res) => {
		const gameId = parseInt(req.params.gameId);
		try {
			const game = await Game.findOne({ gameId });
			if (game) {
				res.status(200).json({
					success: true,
					data: game,
				});
			} else {
				res.status(200).json({
					success: true,
					data: `No game with ${gameId} found.`,
				});
			}
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "Something went wrong",
				error,
			});
		}
	},
	postGames: async (req, res) => {
		const { title, description, materials, type } = req.body;
		try {
			const game = await Game.create({
				title,
				description,
				materials,
				type,
			});
			res.status(200).json({
				success: true,
				data: game,
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "Something went wrong. Please hold on.",
				error,
			});
		}
	},
};
