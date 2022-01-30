import styled from "styled-components";
import { colors } from "../../themes/colors";
type ISideElement = {
	filled?: boolean;
};
type ISideBar = {
	opened: boolean;
};

export const StyledSidebar = styled.div<ISideBar>`
	height: 100vh;
	align-items: center;
	position: sticky;
	top: 0;
	width: ${({ opened }) => (opened ? "350px" : "80px")};
	padding: ${({ opened }) => (opened ? "0.5rem  0 0.5rem 0" : "0.5rem")};
	transition-duration: 0.7s;
	background-color: ${colors.backgroundHeader};
	display: flex;
	flex-direction: column;
`;

export const WidthToggle = styled.div`
	padding: 0.7rem;
	margin-top: 0.5rem;
	width: 100%;
	border-radius: 0.7rem;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: ${colors.softWhite1};
	transition: 0.2s ease;
	:hover {
		color: ${colors.softWhite2};
	}
`;
export const StyledSpan = styled.span<ISideBar>`
	margin-left: 1rem;
	margin: 0px;
	margin-left: ${({ opened }) => (opened ? "1rem" : null)};
	width: ${({ opened }) => (opened ? "50px" : "0px")};
	transform: ${({ opened }) => (opened ? "scale(1)" : "scale(0)")};
	transition-duration: 0.7s;
`;
export const SidebarElement = styled.section<ISideElement>`
	padding: 0.7rem;
	margin-top: 0.5rem;
	width: 90%;
	border-radius: 0.7rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ filled }) =>
		filled ? `${colors.softWhite2}` : `${colors.softWhite1}`};
	cursor: pointer;
	background-color: ${({ filled }) => (filled ? `${colors.softBlack3}` : null)};
	transition: 0.2s ease;
	:hover {
		color: ${colors.softWhite2};
		background-color: ${colors.softBlack3};
		> div {
			display: block;
		}
	}
`;

export const BarElement = styled.hr``;

export const StyledBottomBar = styled.div``;
