import React from "react";

import { Container, Grid } from "@mui/material";

import GameCard from "./GameCard";

const GameList = ({ games }) => {
	return (
		<Container>
			<Grid container spacing={4}>
				{games.map(g => {
					return (
						<Grid item key={g.gameId} xs={12} sm={6} md={6}>
							<GameCard key={g.gameId} game={g} />
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};

export default GameList;
