const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "games.json");
const newFilePath = path.join(process.cwd(), "games-v2.json");

const getVideoId = videoLink => {
	return videoLink.slice(-11);
};
const setCoverImg = videoLink => {
	return `https://i.ytimg.com/vi/${getVideoId(videoLink)}/hqdefault.jpg`;
};

try {
	const contents = fs.readFileSync(filePath, "utf8");
	const jsonString = JSON.parse(contents);
	const newContents = jsonString.map(game => {
		const newGame = { ...game };
		newGame.demoVideo = `https://www.youtube.com/watch?v=${getVideoId(game.demoVideo)}`;
		newGame.coverImg = setCoverImg(newGame.demoVideo);
		return newGame;
	});
	fs.writeFileSync(newFilePath, JSON.stringify(newContents));
} catch (err) {
	console.error(err);
}
