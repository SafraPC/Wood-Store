import React from "react";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import WhoWeAre from "./pages/WhoWeAre";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<WhoWeAre />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default AppRoutes;
