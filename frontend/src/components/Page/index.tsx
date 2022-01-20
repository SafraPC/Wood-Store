import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { StyledPage } from "./styles";

const Page: React.FC = ({ children }) => {
	return (
		<>
			<Header />
			<StyledPage>{children}</StyledPage>
			<Footer />
		</>
	);
};

export { Page };
