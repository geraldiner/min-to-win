import React from "react";
import { styled, alpha } from "@mui/system";
import { CssBaseline, InputBase, Grid, FormControl, InputLabel, Select, MenuItem, Button, Box } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

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
	width: "100%",

	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
	},
}));

const SearchAndFilter = ({ searchQuery, gameType, handleGameTypeChange, handleSearchQueryChange, handleReset }) => {
	return (
		<CssBaseline>
			<Grid item xs={12} md={6}>
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search for titles"
						inputProps={{ "aria-label": "search" }}
						value={searchQuery}
						onChange={e => handleSearchQueryChange(e.target.value)}
					/>
				</Search>
			</Grid>
			<Grid item xs={12} md={6}>
				<FormControl fullWidth>
					<InputLabel id="gameType-select-label">Game Type</InputLabel>
					<Select
						labelId="gameType-select-label"
						id="gameType-select"
						value={gameType}
						label="Game Type"
						onChange={e => handleGameTypeChange(e.target.value)}
					>
						<MenuItem value={""}>All Games</MenuItem>
						<MenuItem value={"Head to Head"}>Head to Head</MenuItem>
						<MenuItem value={"2 vs 2"}>2 vs 2</MenuItem>
						<MenuItem value={"Relay"}>Relay</MenuItem>
						<MenuItem value={"Multiplayer"}>Multiplayer</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
				<Button variant="contained" onClick={() => handleReset()}>
					Reset
				</Button>
			</Box>
		</CssBaseline>
	);
};

export default SearchAndFilter;
