import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";
import logo from '../../../images/d-logo.png'

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar className="navbar"
                collapseOnSelect
                expand="md"
                variant="dark"

                sticky="top"
            >
                <Container>
                    <Navbar.Brand as={NavLink} to="/home">
                        <img className="w-75" src={logo} alt="" />
                    </Navbar.Brand>
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
                            <Nav.Link as={Link} to='/blogs'>
                                Blogs
                            </Nav.Link>
                            <Nav.Link as={Link} to='/appointment'>
                                Appointment
                            </Nav.Link>

                            {
                                user?.email ?
                                    <span className="text-white"><i className="far mx-2 fa-user"></i>{user.displayName} < Button onClick={logOut} variant="danger">Log Out</Button></span>
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
