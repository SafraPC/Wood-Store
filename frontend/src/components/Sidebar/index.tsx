import React, { useState } from "react";
import { useNavigate } from "react-router";
import { SidebarElement, StyledSidebar } from "./styles";
import {
	AiOutlineHome,
	AiOutlineLogin,
	AiOutlineShoppingCart,
} from "react-icons/ai";
import { Tooltip } from "../Tooltip";

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

type ISideBar = {
	screen?: string;
};

type ITooltipSelected = {
	tooltipSelected?: string;
	show: boolean;
};
const Sidebar = ({ screen }: ISideBar) => {
	const navigate = useNavigate();
	const [showTooltip, setShowTooltip] = useState<ITooltipSelected>({
		show: false,
	});

	return (
		<StyledSidebar>
			{SidebarUpsideElements.map((item) => (
				<SidebarElement
					key={item.path}
					onClick={() => navigate(item.path)}
					filled={screen === item.title}
					onMouseEnter={() =>
						setShowTooltip({ show: true, tooltipSelected: item.title })
					}
					onMouseLeave={() => setShowTooltip({ show: false })}
				>
					<item.icon size={20} />
					{showTooltip.show && showTooltip.tooltipSelected === item.title && (
						<Tooltip message={item.title} />
					)}
				</SidebarElement>
			))}
		</StyledSidebar>
	);
};

export { Sidebar };
