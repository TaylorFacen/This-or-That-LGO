import React, { Component } from 'react';
import './App.css';

import apiService from '../../service/apiService';
import cookieService from '../../service/cookieService';

import Navigation from '../Navigation';
import Router from '../Router';

class App extends Component {
    state = {
        user: null,
        isLoading: true
    }

    componentDidMount(){
        cookieService.parseCookie()
        .then(cookieData => {
            if ( cookieData ) {
                const { email } = cookieData;
                // Get user and add to state
                apiService.getUser(email)
                .then(resp => {
                    const user = resp.data;
                    this.setState({
                        user,
                        isLoading: false
                    })

                })
                .catch(error => console.log("Nooo"))
            } else {
                this.setState({ isLoading: false})
            }
        })
    }
    render(){
        const { isLoading, user } = this.state;
        return !isLoading && (
            <div className = "App">
                <Navigation />
                <Router user = { user }/>
            </div>
        )
    }
}

export default App;