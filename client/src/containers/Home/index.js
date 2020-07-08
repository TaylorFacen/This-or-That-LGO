import React, { Component } from 'react';

import cookieService from '../../service/cookieService';

class Home extends Component {
    state = {
        isLoading: true
    }

    componentDidMount(){
        cookieService.parseCookie()
        .then(cookieData => {
            if ( cookieData ) {
                this.setState({ isLoading: false })
            } else {
                window.location.replace(`/login`)
            }
        })
    }

    render(){
        const { isLoading } = this.state;
        return !isLoading && (
            <div className = "Home page">
                <h1>Home</h1>
            </div>
        )
    }
}

export default Home;