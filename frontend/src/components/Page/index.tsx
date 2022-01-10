import React from "react";

const Page: React.FC = ({ children }) => {
	return (
		<div>
			<span>Page Component</span>
			{children}
		</div>
	);
};

export { Page };
