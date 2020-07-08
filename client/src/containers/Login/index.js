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
        const { user } = this.props;
        
        if ( user ) {
            window.location.replace('/')
        } else {
            this.setState({
                isLoading: false
            })
        }
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
        .then(() => {
            cookieService.setCookie(email)
            .then(() => window.location.replace(`/`))

        })
        .catch(error => {
            if (error.response?.status === 404) {
                this.setState({
                    errorMessage: "Intruder alert! This game is only for the awesome LGO Class of 2022!"
                })
            }
        })
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