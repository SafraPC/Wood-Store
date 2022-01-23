import React from "react";
import { useNavigate } from "react-router";
import { SidebarElement, StyledSidebar } from "./styles";
import {
	AiOutlineHome,
	AiOutlineLogin,
	AiOutlineShoppingCart,
} from "react-icons/ai";

const SidebarUpsideElements = [
	{
		title: "Home",
		path: "/",
		icon: AiOutlineHome,
		filled: false,
	},
	{
		title: "Produtos",
		path: "/products",
		icon: AiOutlineShoppingCart,
		filled: false,
	},
	{
		title: "Login",
		path: "/login",
		icon: AiOutlineLogin,
		filled: false,
	},
];

export type ISideBar = {
	screen?: string;
};

const Sidebar = ({ screen }: ISideBar) => {
	const navigate = useNavigate();

	return (
		<StyledSidebar>
			{SidebarUpsideElements.map((item) => (
				<SidebarElement
					key={item.path}
					onClick={() => navigate(item.path)}
					filled={screen === item.title}
				>
					<item.icon size={20} />
				</SidebarElement>
			))}
		</StyledSidebar>
	);
};

export { Sidebar };
