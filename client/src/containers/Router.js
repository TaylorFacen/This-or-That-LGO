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
        const { user, questions } = this.props;

        return (
            <BrowserRouter>
                <Route exact path = '/' component = { () => <Home user = { user } questions = { questions } /> } />
                <Route exact path = '/login' component = { () => <Login user = { user } /> } />
                <Route exact path = '/matches' component = { () => <Matches user = { user } questions = { questions } /> } />
            </BrowserRouter>
        )
    }
}

export default Router;