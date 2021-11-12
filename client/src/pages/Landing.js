import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GameList from "../components/GameList";

const Landing = () => {
	const [gameList, setGameList] = useState([]);

	useEffect(() => {
		const fetchGames = async () => {
			const res = await axios.get(process.env.REACT_APP_API_ENDPOINT);
			console.log(res);
			setGameList(res.data);
		};
		fetchGames();
	}, []);

	return (
		<div>
			<h1>Landing Page</h1>
			<p>
				Hello! This is eventually going to be a wiki for all the Minute to Win It games I scraped from the{" "}
				<a href="https://challengestodo.com/minute-to-win-it-games/" target="_blank" rel="noopener noreferrer">
					Challenges To Do website
				</a>
				.
			</p>
			<p>
				But for now, only the API is set up at{" "}
				<a href={`${process.env.REACT_APP_API_ENDPOINT}`} target="_blank" rel="noopener noreferrer">
					https://min-to-win.netlify.app/api-v1
				</a>
				. Be sure to <Link to="/api/doc">read the docs</Link> first.
			</p>
			<p>Please also forgive the lame styling 😅</p>
			<p>
				Built by:{" "}
				<a href="https://twitter.com/geraldinedesu" target="_blank" rel="noopener noreferrer">
					@geraldiner
				</a>{" "}
				More projects at:{" "}
				<a href="https://geraldiner.com" target="_blank" rel="noopener noreferrer">
					https://geraldiner.com
				</a>
			</p>
			<div className="games-list">
				<GameList games={gameList} />
			</div>
		</div>
	);
};

export default Landing;
