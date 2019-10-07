import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Search from './Search'
const logo = require('../assets/logo.svg')

const TopNav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">
                <img
                    src={logo}
                    width="30"
                    height="60"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
            </Navbar.Brand>
            <Nav className="mr-auto">

            </Nav>
            <br/>
            <Search/>
        </Navbar>
    )
}

export default TopNav