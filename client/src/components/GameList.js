import React from "react";

import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

const GameList = ({ games }) => {
	return (
		<div>
			{games.map(g => {
				return (
					<Card sx={{ display: "flex" }}>
						<CardMedia
							component="img"
							sx={{ width: 151, minWidth: "33%" }}
							image={g.coverImg ? g.coverImg : "/assets/img/mintowin-default-cover.png"}
							alt={`Cover Image for ${g.title}`}
						/>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<CardContent sx={{ flex: "1 0 auto" }}>
								<Typography component="div" variant="h5">
									{g.title}
								</Typography>
								<Typography variant="p" color="text.primary" component="div">
									{g.description}
								</Typography>
							</CardContent>
							<Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
						</Box>
					</Card>
				);
			})}
		</div>
	);
};

export default GameList;
