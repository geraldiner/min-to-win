import React from "react";

const GameList = ({ games }) => {
	return (
		<div>
			{games.map(g => {
				return <div key={g.gameId}>{g.title}</div>;
			})}
		</div>
	);
};

export default GameList;
