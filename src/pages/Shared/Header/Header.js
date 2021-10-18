import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar className="navbar"
                collapseOnSelect
                expand="md"

                sticky="top"
            >
                <Container>
                    <Navbar.Brand as={NavLink} to="/home"><span className=" fs-1">Dentist Point</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fw-bold">
                            <Nav.Link as={HashLink} to="/home#home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">
                                Services
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/home#doctors">
                                Doctors
                            </Nav.Link>
                            <Nav.Link as={Link} to='/appointment'>
                                Appointment
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
