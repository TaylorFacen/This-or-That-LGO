import React, { Component } from 'react';

import LoginForm from './LoginForm';

import { getUser } from '../../service/apiService';
import cookieService from '../../service/cookieService';

class Login extends Component {
    state = {
        email: "",
        isLoading: true
    }

    componentDidMount(){
        cookieService.parseCookie()
        .then(cookieData => {
            if ( cookieData ) {
                window.location.replace(`/`)
            } else {
                this.setState({ isLoading: false })
            }
        })
    }

    onChange = e => {
        this.setState({
            email: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        // Get User


        // Set Cookie

        // Redirect to Home
    }

    render(){
        const { email, isLoading } = this.state;
        return !isLoading && (
            <div className = "Login page">
                <h1>Login</h1>
                <LoginForm
                    email = { email }
                    onChange = { this.onChange.bind(this) }
                    onSubmit = { this.onSubmit.bind(this) } 
                />
            </div>
        )
    }
}

export default Login;