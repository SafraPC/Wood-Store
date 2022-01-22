import React from "react";

const When: React.FC = (condition, { children }) => (
	<>{condition ? children : null}</>
);
export { When };
