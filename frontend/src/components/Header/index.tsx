import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";

const Header: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand
					style={{ cursor: "pointer" }}
					onClick={() => navigate("/who-we-are")}
				>
					Wood-Store
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link onClick={() => navigate("/products")}>Produtos</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
					<Nav.Link onClick={() => navigate("/register")}>Cadastro</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export { Header };
