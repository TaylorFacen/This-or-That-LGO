import React, { Component } from 'react';

import LoginForm from './LoginForm';

import apiService from '../../service/apiService';
import cookieService from '../../service/cookieService';

import './Login.css';

class Login extends Component {
    state = {
        email: "",
        errorMessage: "",
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
        const { email } = this.state;

        // Get User
        apiService.getUser(email)
        .then(resp => {
            const user = resp.data;
            console.log(user)
        })
        .catch(error => {
            if (error.response?.status === 404) {
                this.setState({
                    errorMessage: "Introder alert! This game is only for the awesome LGO Class of 2022!"
                })
            }
        })

        // Set Cookie

        // Redirect to Home
    }

    render(){
        const { email, errorMessage, isLoading } = this.state;
        return !isLoading && (
            <div className = "Login page">
                <h1>Login</h1>
                <LoginForm
                    email = { email }
                    errorMessage = { errorMessage }
                    onChange = { this.onChange.bind(this) }
                    onSubmit = { this.onSubmit.bind(this) } 
                />
            </div>
        )
    }
}

export default Login;