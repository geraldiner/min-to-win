const Game = require("../models/Game");

module.exports = {
	getIndex: (req, res) => {
		res.status(200).json({
			success: true,
			message: "For more info, see: https://min-to-win.netlify.app/",
		});
	},
	getGames: async (req, res) => {
		try {
			const games = await Game.find().sort({ gameId: 1 });

			res.status(200).json({
				success: true,
				data: {
					games,
				},
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "Internal Server Error",
				error,
			});
		}
	},
	getGameById: async (req, res) => {
		const gameId = parseInt(req.params.gameId);
		if (isNaN(gameId)) res.status(400).json({ success: false, data: "Invalid ID supplied" });
		try {
			const game = await Game.findOne({ gameId });
			if (game) {
				res.status(200).json({
					success: true,
					data: game,
				});
			} else {
				res.status(404).json({
					success: true,
					data: `Game with id=${gameId} not found.`,
				});
			}
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "Internal Server Error",
				error,
			});
		}
	},
	postGame: async (req, res) => {
		const { title, description, materials, type, demoVideo, coverImg } = req.body;
		if (!title || !description || !materials || !type) res.status(405).json({ success: false, data: "Invalid or missing required input" });
		try {
			const game = await Game.create({
				title,
				description,
				materials,
				type,
				demoVideo,
				coverImg,
			});
			res.status(200).json({
				success: true,
				data: game,
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "Internal Server Error",
				error,
			});
		}
	},
};
