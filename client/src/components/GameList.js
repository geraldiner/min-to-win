import React from "react";

import { Container } from "@mui/material";

import GameCard from "./GameCard";

const GameList = ({ games }) => {
	return (
		<Container>
			{games.map(g => {
				return <GameCard key={g.gameId} game={g} />;
			})}
		</Container>
	);
};

export default GameList;
