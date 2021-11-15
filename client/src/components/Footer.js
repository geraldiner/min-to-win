import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { Link as MLink } from "@mui/material";

const Footer = () => {
	return (
		<>
			<Divider sx={{ py: 3 }} />
			<Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
				<Typography variant="subtitle1" align="center" color="text.secondary" component="p">
					Made with ☕ 😭 📃 by{" "}
					<MLink target="_blank" href="https://geraldiner.com">
						@geraldiner
					</MLink>
				</Typography>
			</Box>
		</>
	);
};

export default Footer;
