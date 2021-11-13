import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container } from "@mui/material";

/* Components */
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import GameList from "../components/GameList";
import Pagination from "../components/Pagination";

const url = process.env.NODE_ENV !== "development" ? process.env.REACT_APP_API_ENDPOINT : process.env.REACT_APP_API_ENDPOINT_DEV;

const Landing = () => {
	const [gameList, setGameList] = useState([]);
	const [currentPageUrl, setCurrentPageUrl] = useState(`${url}/games`);
	const [nextPageUrl, setNextPageUrl] = useState("");
	const [prevPageUrl, setPrevPageUrl] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
		setLoading(true);
		let cancel;
		const fetchGames = async () => {
			const res = await axios.get(currentPageUrl, {
				cancelToken: new axios.CancelToken(c => (cancel = c)),
			});
			setNextPageUrl(res.data.data.next);
			setPrevPageUrl(res.data.data.prev);
			setGameList(res.data.data.games);
			setLoading(false);
		};
		fetchGames();
		return () => cancel();
	}, [currentPageUrl]);

	const goToNextPage = () => {
		setCurrentPageUrl(nextPageUrl);
	};

	const goToPrevPage = () => {
		setCurrentPageUrl(prevPageUrl);
	};

	return (
		<main>
			<Hero />
			<Container>
				<h1 id="games">The Games</h1>
				{loading && <p>Loading...</p>}
				{gameList && (
					<>
						<SearchBar />
						<GameList games={gameList} />
						<Pagination goToNextPage={nextPageUrl ? goToNextPage : null} goToPrevPage={prevPageUrl ? goToPrevPage : null} />
					</>
				)}
			</Container>
		</main>
	);
};

export default Landing;
