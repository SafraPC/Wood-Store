import styled from "styled-components";
import { colors } from "../../themes/colors";
type ISideElement = {
	filled: boolean;
};

export const StyledSidebar = styled.div`
	height: 100vh;
	align-items: center;
	position: sticky;
	top: 0;
	width: 80px;
	background-color: ${colors.backgroundHeader};
	display: flex;
	flex-direction: column;
`;

export const SidebarElement = styled.section<ISideElement>`
	padding: 0.7rem;
	margin-top: 0.5rem;
	width: 70%;
	border-radius: 0.7rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ filled }) =>
		filled ? `${colors.softWhite1}` : `${colors.softWhite4}`};
	cursor: pointer;
	background-color: ${({ filled }) => (filled ? `${colors.softBlack3}` : null)};
	transition: 0.2s ease;
	:hover {
		color: ${colors.softWhite1};
		background-color: ${colors.softBlack3};
		> div {
			display: block;
		}
	}
`;

export const BarElement = styled.hr``;

export const StyledBottomBar = styled.div``;
