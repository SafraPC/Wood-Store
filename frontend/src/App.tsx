import React from "react";
import Router from "./router";
import { GlobalStyles } from "./themes/global-styles";
import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
function App() {
	return (
		<>
			<ToastContainer />
			<GlobalStyles />
			<Router />
		</>
	);
}

export default App;
