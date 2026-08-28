import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavbarStyles.css';

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto justify-content-end"> {/* Aligning the navbar to the right */}
                    <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                    <Nav.Link href="/about" className="nav-link">About</Nav.Link>
                    <Nav.Link href="/gallery" className="nav-link">Gallery</Nav.Link>
                    <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;

