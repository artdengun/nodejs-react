import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Navbar.Brand href="#home">Deni Gunawan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#features">Project</Nav.Link>
                            <Nav.Link href="#features">Experience</Nav.Link>
                            <Nav.Link href="#pricing">Contact Me</Nav.Link>
                            <NavDropdown title="My Blog" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Project</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Experience</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Contact Me</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;