import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Pages */
import ApiDoc from "./pages/ApiDoc";
import Landing from "./pages/Landing";

/* Components */
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Landing />} />
					<Route exact path="/api/doc" element={<ApiDoc />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
