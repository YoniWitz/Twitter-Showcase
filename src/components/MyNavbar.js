import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function MyNavbar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand>Twitter Showcase</Navbar.Brand>
            <Nav className="mr-auto">
                <Link as={Link} className="nav-link" to="/">Home</Link>
                <Link as={Link} className="nav-link" to="/user">User Search</Link>
                <Link as={Link} className="nav-link" to="/random">Random Tweet</Link>
            </Nav>
        </Navbar>
    )
}

export default MyNavbar