import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container } from "@mui/material";

/* Components */
import Hero from "../components/Hero";
import GameList from "../components/GameList";

const Landing = () => {
	const [gameList, setGameList] = useState([]);

	useEffect(() => {
		const fetchGames = async () => {
			console.log(process.env.REACT_APP_API_ENDPOINT);
			const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/games`);
			setGameList(res.data.data);
		};
		fetchGames();
	}, []);

	return (
		<main>
			<Hero />
			<Container>
				<GameList games={gameList} />
			</Container>
		</main>
	);
};

export default Landing;
