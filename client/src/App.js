import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Pages */
import ApiDoc from "./pages/ApiDoc";
import Landing from "./pages/Landing";

/* Components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GameInfo from "./pages/GameInfo";

const App = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Landing />} />
					<Route exact path="/game/:id" element={<GameInfo />} />
					<Route exact path="/api/docs" element={<ApiDoc />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
