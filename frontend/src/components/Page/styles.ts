import styled from "styled-components";
import { colors } from "../../themes/colors";

export const StyledPage = styled.main`
	width: 100%;
	display: flex;
	flex-direction: flex;
	background-color: ${colors.softWhite1};
`;
export const StyledContent = styled.div`
	min-height: 100vh;
	height: 100%;
	width: 100%;
	padding: 1rem;
`;

export const ColumnContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`;
