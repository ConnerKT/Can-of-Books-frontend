import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

import React from 'react'

export default function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>My Favorite Books</Navbar.Brand>
                <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
                {/* PLACEHOLDER: render a navigation link to the about page */}
            </Navbar>

        </div>
    )
}


