import React from "react";
import { useNavigate } from "react-router";
import { SidebarElement, StyledSidebar } from "./styles";

const SidebarUpsideElements = [
	{
		title: "Wood Store",
		path: "/who-we-are",
		icon: "Home",
	},
	{
		title: "Produtos",
		path: "/products",
		icon: "Products",
	},
	{
		title: "Login",
		path: "/login",
		icon: "Login",
	},
];

const Sidebar: React.FC = () => {
	const navigate = useNavigate();

	return (
		<StyledSidebar>
			{SidebarUpsideElements.map((item) => (
				<SidebarElement key={item.path} onClick={() => navigate(item.path)}>
					{item.title}
				</SidebarElement>
			))}
		</StyledSidebar>
	);
};

export { Sidebar };
