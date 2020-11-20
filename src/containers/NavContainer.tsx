import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

const NavContainer = (props: any) => (
    <Navbar bg="light">
        <Navbar.Brand>Sky Tour</Navbar.Brand>
        <Nav className="mr-auto" activeKey="home">
            <Nav.Item>
                <Nav.Link eventKey="home">
                    <LinkContainer to="/" exact>
                        <span>Home</span>
                    </LinkContainer>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar>
);

export default NavContainer;
