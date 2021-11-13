import React from "react";
import { Container, Button } from "@mui/material";

const Pagination = ({ goToNextPage, goToPrevPage }) => {
	return (
		<Container sx={{ display: "flex", justifyContent: "center", my: 4 }}>
			{goToPrevPage && (
				<Button sx={{ mx: 2 }} variant="contained" color="primary" size="large" onClick={goToPrevPage}>
					Previous
				</Button>
			)}
			<Button sx={{ mx: 2 }} variant="contained" color="primary" size="large" onClick={goToNextPage}>
				Next
			</Button>
		</Container>
	);
};

export default Pagination;
