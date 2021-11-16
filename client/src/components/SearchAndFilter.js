import React from "react";
import { styled, alpha } from "@mui/system";
import { CssBaseline, InputBase, Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
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

const SearchAndFilter = ({ gameType, handleGameTypeChange, handleSearchQueryChange }) => {
	return (
		<CssBaseline>
			<Box sx={{ width: "50%" }}>
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search for titles"
						inputProps={{ "aria-label": "search" }}
						onChange={e => handleSearchQueryChange(e.target.value)}
					/>
				</Search>
			</Box>
			<Box sx={{ width: "50%" }}>
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
			</Box>
		</CssBaseline>
	);
};

export default SearchAndFilter;
