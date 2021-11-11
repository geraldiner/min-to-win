const Game = require("../models/Game");

module.exports = {
	getIndex: (req, res) => {
		if (process.env.NODE_ENV !== "production") {
			res.redirect("http://localhost:3000/api/doc");
		} else {
			res.redirect("https://min-to-win.netlify.app/api/doc");
		}
	},
	getGames: async (req, res) => {
		try {
			const games = await Game.find();
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
	postGames: async (req, res) => {
		const { title, description, materials } = req.body;
		try {
			const game = await Game.create({
				title,
				description,
				materials,
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
