import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function MyNavbar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand>Twitter Showcase</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link}  to="/">Home</Nav.Link>
                <Nav.Link as={Link}  to="/user">User Search</Nav.Link>
                <Nav.Link as={Link}  to="/random">Random Tweet</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MyNavbar