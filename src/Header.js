import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { Navbar, NavItem, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from './assets/logo.png'
import { useAuth0 } from "@auth0/auth0-react";

import Profile from './Profile';
export default function Header() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();


    return (
        <div style={{ color: 'white' }}>
            <Navbar style={{ display: 'flex', justifyContent: 'space-evenly' }} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand><img
                    alt="My Book List"
                    src={logo}
                    width="70"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                </Navbar.Brand>
                <Nav className="me-auto">
                    <NavItem style={{ 'color': 'white' }}><Link to="/" className="nav-link">Home</Link></NavItem>
                    {/* PLACEHOLDER: render a navigation link to the about page */}
                    <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
                    <NavItem>
                        {isAuthenticated ?
                            <Link to="/profile" className="nav-link">Profile</Link> :
                            <div></div>}
                    </NavItem>

                    {isAuthenticated === false ? <Button onClick={() => { loginWithRedirect() }}>Login</Button> :
                        <Button onClick={() => { logout() }}>Logout</Button>
                    }

                </Nav>

            </Navbar>

        </div>
    )
}


