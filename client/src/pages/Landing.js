import React, { useState, useEffect } from "react";
import axios from "axios";

import { styled, alpha } from "@mui/material/styles";
import { Container, Box, InputBase, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

/* Components */
import Hero from "../components/Hero";
import GameList from "../components/GameList";
import Pagination from "../components/Pagination";

const url = process.env.NODE_ENV !== "development" ? process.env.REACT_APP_API_ENDPOINT : process.env.REACT_APP_API_ENDPOINT_DEV;

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha("#3f50b5", 0.15),
	"&:hover": {
		backgroundColor: alpha("#3f50b5", 0.25),
	},
	margin: 16,
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "100ch",
		},
	},
}));

const Landing = () => {
	const [gameList, setGameList] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [gameType, setGameType] = useState("");
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
			if (searchQuery !== "" && gameType !== "") {
				setGameList(res.data.data.games.filter(g => g.title.includes(searchQuery) && g.type.includes(gameType)));
			} else if (searchQuery !== "") {
				setGameList(res.data.data.games.filter(g => g.title.includes(searchQuery)));
			} else if (gameType) {
				setGameList(res.data.data.games.filter(g => g.type.includes(gameType)));
			} else {
				setGameList(res.data.data.games);
			}
			setLoading(false);
		};
		fetchGames();
		return () => cancel();
	}, [currentPageUrl, searchQuery, gameType]);

	const goToNextPage = () => {
		setCurrentPageUrl(nextPageUrl);
	};

	const goToPrevPage = () => {
		setCurrentPageUrl(prevPageUrl);
	};

	const handleChange = e => {
		setCurrentPageUrl(`${url}/games`);
		setGameType(e.target.value);
	};

	return (
		<main>
			<Hero />
			<Container>
				<h1 id="games">The Games</h1>
				{loading && <p>Loading...</p>}
				{gameList && (
					<>
						<Container sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
							<Box sx={{ width: "50%" }}>
								<Search>
									<SearchIconWrapper>
										<SearchIcon />
									</SearchIconWrapper>
									<StyledInputBase
										placeholder="Search for titles"
										inputProps={{ "aria-label": "search" }}
										onChange={e => setSearchQuery(e.target.value)}
									/>
								</Search>
							</Box>
							<Box sx={{ width: "50%" }}>
								<FormControl fullWidth>
									<InputLabel id="gameType-select-label">Game Type</InputLabel>
									<Select labelId="gameType-select-label" id="gameType-select" value={gameType} label="Game Type" onChange={handleChange}>
										<MenuItem value={""}>All Games</MenuItem>
										<MenuItem value={"Head to Head"}>Head to Head</MenuItem>
										<MenuItem value={"2 vs 2"}>2 vs 2</MenuItem>
										<MenuItem value={"Relay"}>Relay</MenuItem>
										<MenuItem value={"Multiplayer"}>Multiplayer</MenuItem>
									</Select>
								</FormControl>
							</Box>
						</Container>
						<GameList games={gameList} />
						<Pagination goToNextPage={nextPageUrl ? goToNextPage : null} goToPrevPage={prevPageUrl ? goToPrevPage : null} />
					</>
				)}
			</Container>
		</main>
	);
};

export default Landing;
