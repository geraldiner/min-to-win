const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		unique: true,
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
	coverImg: {
		type: String,
		trim: true,
	},
	gameId: {
		type: Number,
	},
});

GameSchema.pre("save", async function (next) {
	if (this.demoVideo.startsWith("https://youtu.be/")) {
		this.demoVideo = `https://www.youtube.com/watch?v=${this.demoVideo.slice(-11)}`;
	}
	if (!this.coverImg && this.demoVideo.includes("youtube")) {
		this.coverImg = `https://i.ytimg.com/vi/${this.demoVideo.slice(-11)}/hqdefault.jpg`;
	}
	next();
});

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;
