import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<Link to="/">Home</Link>
			<br />
			<Link to="/api/doc">API</Link>
		</div>
	);
};

export default Navbar;
