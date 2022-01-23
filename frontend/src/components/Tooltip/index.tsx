import React from "react";
import { ActiveTooltip } from "./style";

const Tooltip = ({ message }: { message: string }) => {
	return (
		<ActiveTooltip>
			<span>{message}</span>
		</ActiveTooltip>
	);
};
export { Tooltip };
