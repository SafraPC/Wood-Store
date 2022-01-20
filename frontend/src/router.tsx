import React from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import WhoWeAre from "./pages/WhoWeAre";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/who-we-are" />} />
			<Route path="/who-we-are" element={<WhoWeAre />} />
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default AppRoutes;
