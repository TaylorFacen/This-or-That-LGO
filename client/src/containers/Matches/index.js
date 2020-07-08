import React, { Component } from 'react';

import cookieService from '../../service/cookieService';

class Matches extends Component {
    state = {
        isLoading: true
    }

    componentDidMount(){
        const { user } = this.props;
        if ( user ) {
            cookieService.parseCookie()
            .then(cookieData => {
                if ( cookieData ) {
                    this.setState({ isLoading: false })
                } else {
                    window.location.replace(`/login`)
                }
            })
        } else {
            window.location.replace('/login')
        }
    }

    render(){
        const { isLoading } = this.state;
        return !isLoading && (
            <div className = "Matches page">
                <h1>Matches</h1>
            </div>
        )
    }
}

export default Matches;