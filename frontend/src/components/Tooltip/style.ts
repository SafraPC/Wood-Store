import styled from "styled-components";
import { colors } from "../../themes/colors";

export const ActiveTooltip = styled.div`
	display: none;
	position: absolute;
	left: 72px;
	transition: transform 0.2s ease;
	font-size: 18px;
	border-radius: 0.2rem;
	background-color: ${colors.backgroundHeader};
	color: ${colors.softWhite1};
	padding: 0.5rem;
	box-shadow: 1px 0.8px 0.2rem black;
	:before {
		content: "";
		position: absolute;
		top: 50%;
		left: 0;
		width: 8px;
		height: 8px;
		transform: rotate(-45deg) translateY(-50%);
		background-color: ${colors.backgroundHeader};
		display: block;
	}
	> span {
		font-size: 15px;
	}
`;
