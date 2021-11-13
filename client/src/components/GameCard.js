import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

import { Box, Card, CardMedia, CardContent, CardActions, Button, Typography, Modal } from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "max-content",
	bgcolor: "background.paper",
	border: "2px solid #000",
	p: 4,
};

const GameCard = ({ game }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const getVideoId = videoLink => {
		return videoLink.slice(-11);
	};
	return (
		<div>
			<Card sx={{ display: "flex", my: 3, p: 3 }}>
				<CardMedia
					sx={{ width: 151, minWidth: "33%" }}
					component="img"
					image={game.coverImg ? game.coverImg : "/assets/img/mintowin-default-cover.png"}
					alt={`Cover Image for ${game.title}`}
				/>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<CardContent sx={{ flex: "1 0 auto" }}>
						<Typography component="div" variant="h3" sx={{ my: 2 }}>
							{game.title}
						</Typography>
						<Typography component="div" variant="h5" color="text.secondary" sx={{ my: 2 }}>
							{game.type}
						</Typography>
						<Typography variant="p" color="text.primary" component="div" sx={{ my: 2 }}>
							{game.description}
						</Typography>
					</CardContent>
					{game.demoVideo && (
						<CardActions sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
							<Button onClick={handleOpen}>View Demo</Button>
							<Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
								<Box sx={style}>
									<Typography id="modal-modal-title" variant="h6" component="h2">
										{game.title}
									</Typography>
									<Box>
										<ReactPlayer
											url={
												process.env.NODE_ENV === "development"
													? `https://www.youtube.com/watch?v=${getVideoId(game.demoVideo)}&showinfo=0&enablejsapi=1&origin=http://localhost:3000`
													: `https://www.youtube.com/watch?v=${getVideoId(game.demoVideo)}`
											}
										/>
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
