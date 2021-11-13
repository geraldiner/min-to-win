import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container } from "@mui/material";

/* Components */
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import GameList from "../components/GameList";

const Landing = () => {
	const [gameList, setGameList] = useState([]);
	const [currentPageUrl, setCurrentPageUrl] = useState(`${process.env.REACT_APP_API_ENDPOINT}/games`);
	const [nextPageUrl, setNextPageUrl] = useState("");
	const [prevPageUrl, setPrevPageUrl] = useState("");

	useEffect(() => {
		const fetchGames = async () => {
			const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/games`);
			setGameList(res.data.data);
		};
		fetchGames();
	}, [currentPageUrl]);

	return (
		<main>
			<Hero />
			<Container>
				<h1 id="games">The Games</h1>
				<SearchBar />
				<GameList games={gameList} />
			</Container>
		</main>
	);
};

export default Landing;
