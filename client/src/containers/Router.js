import React, { Component } from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Matches from './Matches';

class Router extends Component {
    render(){
        return (
            <BrowserRouter>
                <Route exact path = '/' component = { Home } />
                <Route exact path = '/login' component = { Login } />
                <Route exact path = '/matches' component = { Matches } />
            </BrowserRouter>
        )
    }
}

export default Router;