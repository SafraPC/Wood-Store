import styled from "styled-components";
import { colors } from "../../themes/colors";
export const StyledSidebar = styled.div`
	height: auto;
	width: 65px;
	background-color: ${colors.backgroundHeader};
	display: flex;
	flex-direction: column;
`;

export const SidebarElement = styled.section`
	width: 100%;
	height: 60px;
	padding: 0.5rem;
	border-bottom: 1px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	cursor: pointer;
`;
