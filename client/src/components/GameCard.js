import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

import { Box, Card, CardMedia, CardContent, CardActions, Button, Typography, Modal } from "@mui/material";

import getTypeColor from "../utils/getTypeColor";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	minWidth: "480px",
	width: "max-content",
	bgcolor: "background.paper",
	border: "2px solid #000",
	p: 4,
};

const GameCard = ({ game }) => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleClick = game => {
		navigate(`/game/${game.gameId}`, { state: { game } });
	};

	return (
		<div>
			<Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
				<CardMedia component="img" image={game.coverImg} alt={`Cover Image for ${game.title}`} />
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<CardContent sx={{ flex: "1 0 auto" }}>
						<Typography component="div" variant="h4" sx={{ my: 2 }}>
							{game.title}
						</Typography>
						<Typography variant="span" color="white" bgcolor={getTypeColor(game.type)} sx={{ my: 2, p: 1, borderRadius: 2 }}>
							{game.type}
						</Typography>
					</CardContent>
					{game.demoVideo && (
						<CardActions sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
							<Button size="large" onClick={handleOpen}>
								View Demo
							</Button>
							<Button size="large" onClick={() => handleClick(game)}>
								Learn More
							</Button>
							<Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
								<Box sx={style}>
									<Typography id="modal-modal-title" variant="h6" component="h2">
										{game.title}
									</Typography>
									<Box>
										<ReactPlayer controls={true} url={game.demoVideo} />
									</Box>
								</Box>
							</Modal>
						</CardActions>
					)}
				</Box>
			</Card>
		</div>
	);
};

export default GameCard;
