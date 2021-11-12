import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Navbar = () => {
	return (
		<div className="navbar">
			<AppBar position="relative">
				<Toolbar sx={{ display: "flex", justifyContent: "space-evenly" }}>
					<div className="left" style={{ width: "50%" }}>
						<Typography variant="h6" color="inherit" noWrap>
							<Link style={{ textDecoration: "none", color: "white" }} to="/">
								MinToWin
							</Link>
						</Typography>
					</div>
					<div className="right">
						<Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
							<Typography sx={{ minWidth: 100 }}>
								<Link style={{ textDecoration: "none", color: "white" }} to="/">
									Home
								</Link>
							</Typography>
							<Typography sx={{ minWidth: 100 }}>
								<Link style={{ textDecoration: "none", color: "white" }} to="/api/doc">
									API
								</Link>
							</Typography>
						</Box>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
