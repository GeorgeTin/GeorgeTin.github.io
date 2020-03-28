import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './Menu.css'

class Menu extends Component {
    render() {
        return <div>
            <Navbar bg="light" expand="lg | md" style={{'borderBottom': '2px solid #000000'}}>
                <Navbar.Brand>TabsBeforeSpaces</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style={{paddingRight: '5vw'}}>
                        <Nav.Link href="/#/">Acasa</Nav.Link>
                        <Nav.Link href="/#/blog">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    }
}

export default Menu;