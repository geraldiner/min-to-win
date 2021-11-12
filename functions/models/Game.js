const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
		trim: true,
	},
	materials: [
		{
			type: String,
			required: true,
			trim: true,
		},
	],
	type: {
		type: String,
		required: true,
		trim: true,
	},
	demoVideo: {
		type: String,
		trim: true,
	},
	gameId: {
		type: Number,
	},
});

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;
