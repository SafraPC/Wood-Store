import styled from "styled-components";
import { colors } from "../../themes/colors";
export const StyledSidebar = styled.div`
	height: auto;
	width: 65px;
	background-color: ${colors.backgroundHeader};
	display: flex;
	flex-direction: column;
`;

type ISideElement = {
	filled: boolean;
};
export const SidebarElement = styled.section<ISideElement>`
	width: 100%;
	height: 50px;
	padding: 0.3rem;
	border-bottom: 1px solid black;
	border-radius: 0.3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ filled }) => (filled ? "aquamarine" : "white")};
	cursor: pointer;
	transition: 0.2s ease;
	:hover {
		background-color: ${colors.softBlack1};
		color: aquamarine;
	}
`;
