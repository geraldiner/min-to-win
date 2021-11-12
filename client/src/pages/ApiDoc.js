import React from "react";

const ApiDoc = () => {
	return (
		<div>
			<h1>REST API Documentation</h1>
			<p>
				The main endpoint is:{" "}
				<a href="https://min-to-win.netlify.app/api-v1" target="_blank" rel="noopener noreferrer">
					https://min-to-win.netlify.app/api-v1
				</a>
			</p>
			<h2>Data Response</h2>
			<p>
				Responses are sent as a JSON object with a <code>"data"</code> field containing the information for a single game, or as an array with a list
				of games.
			</p>
			<h3>Response for single game</h3>
			<pre style={{ whiteSpace: "pre-wrap" }}>
				{`{
  "success": true,
  "data": {
    "_id": "618dc9f76417fb53ec9459bd",
    "title": "Face the Cookie",
    "description": "This is one of the more delicious games on the roster. Each player has a cookie on their forehead. Using only their facial muscles, they will need to move this cookie, to their mouth. If a cookie falls to the ground during the attempt, the person must take another cookie and start all over again.",
    "materials": [
        "Cookies"
    ],
    "type": "Head to Head",
    "demoVideo": "https://youtu.be/HljLGW45_-E",
    "gameId": 1
  }
}`}
			</pre>

			<h3>Response for list of games</h3>
			<pre style={{ whiteSpace: "pre-wrap" }}>
				{`{
    "success": true,
    "data": [
        {
            "_id": "618dc9f76417fb53ec9459bd",
            "title": "Face the Cookie",
            "description": "This is one of the more delicious games on the roster. Each player has a cookie on their forehead. Using only their facial muscles, they will need to move this cookie, to their mouth. If a cookie falls to the ground during the attempt, the person must take another cookie and start all over again.",
            "materials": [
                "Cookies"
            ],
            "type": "Head to Head",
            "demoVideo": "https://youtu.be/HljLGW45_-E",
            "gameId": 1
        },
        {
            "_id": "618dc9f76417fb53ec9459be",
            "title": "Whippersnapper",
            "description": "Each player will be given a towel or a rug and will have a box a certain distance away from them. The front part of the cloth will be weighted down. A ping pong ball will be placed on the rug. You will need to flick the cloth – and the ball – upwards using the two free ends of the cloth. You will need to get the ball into the box with this method.",
            "materials": [
                "Towel or rug for each player",
                "Ping pong balls",
                "Boxes"
            ],
            "type": "Head to Head",
            "demoVideo": "https://youtu.be/sojMlUNhLos",
            "gameId": 2
        },
        {
            "_id": "618dc9f76417fb53ec9459bf",
            "title": "Nose Dive",
            "description": "Here the contestants rely on petroleum jelly (or something similar) and a bowl full of cotton balls. The goal is to rub the jelly on your nose and use it to pick up the cotton balls. Once the cotton ball has stuck to your nose, you will need to walk across the room and deposit the ball in another bowl. You will then need to go back and repeat the process.",
            "materials": [
                "Petroleum Jelly",
                "Cotton balls"
            ],
            "type": "Head to Head",
            "demoVideo": "https://youtu.be/dFFtXUDxhuU",
            "gameId": 3
        }
    ]
}`}
			</pre>
			<h2>Routes</h2>
			<h3>/games?limit=:limit</h3>
			<p>Returns a list of games with the given limit (default=20).</p>
			<h3>/games/:gameId</h3>
			<p>
				Returns the game with the specific <code>gameId</code>.
			</p>
		</div>
	);
};

export default ApiDoc;
