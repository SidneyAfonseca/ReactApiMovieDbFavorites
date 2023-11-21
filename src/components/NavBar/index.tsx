// NavBar.js
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <LinkContainer to="/">
                    <Nav.Link>Filmes</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/recomendacoes">
                    <Nav.Link>Recomendações</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
};

export default NavBar;
