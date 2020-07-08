import React, { Component } from 'react';
import './App.css';

import Navigation from '../Navigation';
import Router from '../Router';

class App extends Component {
    render(){
        return (
            <div className = "App">
                <Navigation />
                <Router />
            </div>
        )
    }
}

export default App;