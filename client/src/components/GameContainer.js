import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Box, Container } from "@mui/material";

import GameList from "../components/GameList";
import SearchAndFilter from "../components/SearchAndFilter";
import Pagination from "../components/Pagination";

const GameContainer = () => {
	const [games, setGames] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [gameType, setGameType] = useState("");
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(10);

	const url = process.env.NODE_ENV !== "development" ? process.env.REACT_APP_API_ENDPOINT : process.env.REACT_APP_API_ENDPOINT_DEV;

	useEffect(() => {
		let cancel;
		setLoading(true);

		const fetchGames = async () => {
			const res = await axios.get(`${url}/games`, {
				cancelToken: new axios.CancelToken(c => (cancel = c)),
			});
			const resGames = res.data.data.games;
			if (searchQuery && gameType) {
				setGames(resGames.filter(g => g.title.toLowerCase().includes(searchQuery) && g.type.includes(gameType)));
			} else if (searchQuery) {
				setGames(resGames.filter(g => g.title.toLowerCase().includes(searchQuery)));
			} else if (gameType) {
				setGames(resGames.filter(g => g.type.includes(gameType)));
			} else {
				setGames(resGames);
			}
		};
		fetchGames();
		setLoading(false);
		return () => cancel();
	}, [searchQuery, gameType, url]);

	const indexOfLast = currentPage * itemsPerPage;
	const indexOfFirst = indexOfLast - itemsPerPage;
	const currentGames = games.slice(indexOfFirst, indexOfLast);

	const paginate = pageNumber => {
		setCurrentPage(pageNumber);
		window.scrollTo(0, 0);
	};

	const handleSearchQueryChange = query => {
		setSearchQuery(query.toLowerCase());
	};
	const handleGameTypeChange = gameTypeValue => {
		setGameType(gameTypeValue);
	};

	const handleReset = () => {
		setSearchQuery("");
		setGameType("");
	};

	return (
		<Container>
			<Grid container>
				<SearchAndFilter
					gameType={gameType}
					searchQuery={searchQuery}
					handleGameTypeChange={handleGameTypeChange}
					handleSearchQueryChange={handleSearchQueryChange}
					handleReset={handleReset}
				/>
			</Grid>
			<Box>
				<h1 id="games" style={{ textAlign: "center" }}>
					Games
				</h1>
				<GameList games={currentGames} loading={loading} />
			</Box>
			<Pagination itemsPerPage={itemsPerPage} totalItems={games.length} paginate={paginate} />
		</Container>
	);
};

export default GameContainer;
