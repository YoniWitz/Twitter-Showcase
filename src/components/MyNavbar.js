import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'

function MyNavbar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand>Twitter Showcase</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#user">User Search</Nav.Link>
                <Nav.Link href="#random">Random Tweet</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MyNavbar