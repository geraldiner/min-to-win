import React from "react";
import { Link, useLocation } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

import { Container, Box, Typography, Button } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";

import getTypeColor from "../utils/getTypeColor";

const GameInfo = props => {
	// const { id } = useParams();
	const { state } = useLocation();
	const game = state.game;
	return (
		<main>
			<Container sx={{ my: 4, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
				<Box sx={{ textAlign: "left", my: 2 }}>
					<Typography component="div" variant="p" p={2}>
						<Button>
							<Link style={{ display: "flex", alignItems: "center" }} to="/">
								<ChevronLeft />
								Back to All Games
							</Link>
						</Button>
					</Typography>
				</Box>
				<Box sx={{ my: 2 }}>
					<Typography component="div" variant="h3" p={2}>
						{game.title}
					</Typography>
					<Typography variant="span" color="white" bgcolor={getTypeColor(game.type)} sx={{ p: 1, borderRadius: 2 }}>
						{game.type}
					</Typography>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", my: 2 }}>
					<ReactPlayer controls={true} url={game.demoVideo} />
				</Box>
				<Box sx={{ textAlign: "left", my: 2, px: 8 }}>
					<Typography component="div" variant="h5" pt={3} pb={1}>
						Description
					</Typography>
					<Typography component="p">{game.description}</Typography>
					<Typography component="div" variant="h5" pt={3} pb={1}>
						Materials
					</Typography>
					<Typography component="ul">
						{game.materials.map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
					</Typography>
				</Box>
			</Container>
		</main>
	);
};

export default GameInfo;
