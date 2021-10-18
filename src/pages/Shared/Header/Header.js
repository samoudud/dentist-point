import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="md"
                bg="primary"
                variant="dark"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand href="/home">Dentist Point</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home#home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">
                                Services
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/home#doctors">
                                Doctors
                            </Nav.Link>

                            {
                                user?.email ?
                                    <span>{user.displayName} < Button onClick={logOut} variant="danger">Log Out</Button></span>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Log In
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
