import React from 'react';
import { Navbar } from 'react-bootstrap';

import './Navigation.css'

export default () => {
    return (
        <Navbar bg = "light" expand = "lg" className = "Navigation">
            <Navbar.Brand href = "/">This or That</Navbar.Brand>
        </Navbar>
    )
}