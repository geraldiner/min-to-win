import React from "react";
import { Container, Stack, Pagination as MPagination } from "@mui/material";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<Container sx={{ display: "flex", justifyContent: "center", my: 4 }}>
			<Stack spacing={2}>
				<MPagination count={pageNumbers.length} color="primary" onChange={(event, value) => paginate(value)}></MPagination>
			</Stack>
		</Container>
	);
};

export default Pagination;
