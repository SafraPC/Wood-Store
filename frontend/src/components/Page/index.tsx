import React from "react";
import { Footer } from "../Footer";
import { Sidebar } from "../Sidebar";
import { ColumnContainer, StyledContent, StyledPage } from "./styles";

type IPage = {
	children: React.ReactNode;
	screen: string;
};

const Page = ({ screen, children }: IPage) => {
	return (
		<StyledPage>
			<Sidebar screen={screen} />
			<ColumnContainer>
				<StyledContent>{children}</StyledContent>
				<Footer />
			</ColumnContainer>
		</StyledPage>
	);
};

export { Page };
