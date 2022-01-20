import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";

const Header: React.FC = () => {
	const navigate = useNavigate();
	//Navigate to other pages
	const redirect = (url: string) => {
		navigate(url);
	};

	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand
					style={{ cursor: "pointer" }}
					onClick={() => redirect("/who-we-are")}
				>
					Wood-Store
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link onClick={() => redirect("/products")}>Produtos</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link onClick={() => redirect("/login")}>Login</Nav.Link>
					<Nav.Link onClick={() => redirect("/register")}>Cadastro</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export { Header };
