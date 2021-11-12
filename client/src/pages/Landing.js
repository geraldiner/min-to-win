import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<div>
			<h1>Landing Page</h1>
			<p>
				Hello! This is eventually going to be a wiki for all the Minute to Win It games I scraped from the{" "}
				<a href="https://challengestodo.com/minute-to-win-it-games/" target="_blank" rel="noopener noreferrer">
					Challenges To Do website
				</a>
				.
			</p>
			<p>
				But for now, only the API is set up at{" "}
				<a href="https://min-to-win.netlify.app/api-v1" target="_blank" rel="noopener noreferrer">
					https://min-to-win.netlify.app/api-v1
				</a>
				. Be sure to <Link to="/api/doc">read the docs</Link> first.
			</p>
			<p>Please also forgive the lame styling 😅</p>
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

export default Landing;
