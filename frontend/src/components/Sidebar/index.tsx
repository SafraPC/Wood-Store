import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
	SidebarElement,
	StyledSidebar,
	StyledSpan,
	WidthToggle,
} from "./styles";
import {
	AiOutlineHome,
	AiOutlineLogin,
	AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { Tooltip } from "../Tooltip";

const SidebarUpsideElements = [
	{
		title: "Home",
		path: "/who-we-are",
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

type ISideBar = {
	screen?: string;
};

const Sidebar = ({ screen }: ISideBar) => {
	const navigate = useNavigate();
	const [isOpenBar, setOpenBar] = useState<boolean>(false);

	return (
		<StyledSidebar opened={isOpenBar}>
			<WidthToggle onClick={() => setOpenBar(!isOpenBar)}>
				{isOpenBar ? <BiLeftArrow size={20} /> : <BiRightArrow size={20} />}
			</WidthToggle>
			{SidebarUpsideElements.map((item) => (
				<SidebarElement
					key={item.path}
					onClick={() => navigate(item.path)}
					filled={screen === item.title}
				>
					<item.icon size={15} />
					<StyledSpan opened={isOpenBar}>{item.title}</StyledSpan>
					{!isOpenBar && <Tooltip message={item.title} />}
				</SidebarElement>
			))}
		</StyledSidebar>
	);
};

export { Sidebar };
