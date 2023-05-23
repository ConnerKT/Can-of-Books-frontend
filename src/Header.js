import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";



export default function Header() {
    return (
        <div style={{color:'white'}}>
            <Navbar style={{ display:'flex', justifyContent: 'space-evenly' }} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>My Favorite Books</Navbar.Brand>
                <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
                {/* PLACEHOLDER: render a navigation link to the about page */}
                <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
            </Navbar>

        </div>
    )
}


