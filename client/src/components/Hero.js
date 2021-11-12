import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { Link as MLink } from "@mui/material";

const Hero = () => {
	return (
		<div className="hero">
			<Box
				sx={{
					bgcolor: "background.paper",
					pt: 8,
					pb: 6,
				}}
			>
				<Container maxWidth="sm">
					<Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
						Minute To Win It Games Wiki
					</Typography>
					<Typography variant="h5" align="center" color="text.secondary" paragraph>
						A list of Minute to Win It games, originally scraped from the{" "}
						<a href="https://challengestodo.com/minute-to-win-it-games/" target="_blank" rel="noopener noreferrer">
							Challenges To Do website
						</a>
						.
					</Typography>
					<Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
						<Button variant="contained">
							<MLink href="#games">Browse Games</MLink>
						</Button>
						<Button variant="outlined">
							<Link to="/api/doc">View API</Link>
						</Button>
					</Stack>
				</Container>
			</Box>

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
		</div>
	);
};

export default Hero;
