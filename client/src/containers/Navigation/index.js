import React from 'react';
import { Navbar } from 'react-bootstrap';

import './Navigation.css'

const classLogo = require('../../images/class-logo.jpg');

export default () => {
    return (
        <Navbar bg = "light" expand = "lg" className = "Navigation">
            <Navbar.Brand href = "/"><img
            src = { classLogo }
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="LGO Class Logo"
        />This or That</Navbar.Brand>
        </Navbar>
    )
}