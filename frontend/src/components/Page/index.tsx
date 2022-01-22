import React from "react";
import { Footer } from "../Footer";
import { Sidebar } from "../Sidebar";
import { ColumnContainer, StyledContent, StyledPage } from "./styles";

const Page: React.FC = ({ children }) => {
	return (
		<StyledPage>
			<Sidebar />
			<ColumnContainer>
				<StyledContent>{children}</StyledContent>
				<Footer />
			</ColumnContainer>
		</StyledPage>
	);
};

export { Page };
