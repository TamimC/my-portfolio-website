import {Navbar, Nav} from 'react-bootstrap';
import React from 'react';

const CustomNavbar = () =>
{
    return(
        <Navbar className = "header-color" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="./" >Tamim Technology</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>    
                    <Nav.Link href="/Resume">Resume</Nav.Link>
                    <Nav.Link href="/Blog">Blog</Nav.Link>
                    <Nav.Link href="/Projects">Projects</Nav.Link>
                    <Nav.Link href="/Technology">Technology</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;