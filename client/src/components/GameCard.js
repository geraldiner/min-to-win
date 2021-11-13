import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

import { Box, Card, CardMedia, CardContent, CardActions, Button, Typography, Modal } from "@mui/material";

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
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const getVideoId = videoLink => {
		return videoLink.slice(-11);
	};
	const setCoverImg = videoLink => {
		return `https://i.ytimg.com/vi/${getVideoId(videoLink)}/hqdefault.jpg`;
	};
	return (
		<div>
			<Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
				<CardMedia
					component="img"
					image={setCoverImg(game.demoVideo) ? setCoverImg(game.demoVideo) : "/assets/img/mintowin-default-cover.png"}
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
										<ReactPlayer controls={true} url={`https://www.youtube.com/watch?v=${getVideoId(game.demoVideo)}&controls=1`} />
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
