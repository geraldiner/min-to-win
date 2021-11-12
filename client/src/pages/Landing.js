import React, { useState, useEffect } from "react";
import axios from "axios";

/* Components */
import Hero from "../components/Hero";
import GameList from "../components/GameList";

const Landing = () => {
	const [gameList, setGameList] = useState([]);

	useEffect(() => {
		const fetchGames = async () => {
			const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/games`);
			setGameList(res.data.data);
		};
		fetchGames();
	}, []);

	return (
		<main>
			<Hero />
			<div className="games-list">
				<GameList games={gameList} />
			</div>
		</main>
	);
};

export default Landing;
