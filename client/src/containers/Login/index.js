import React, { Component } from 'react';

import LoginForm from './LoginForm';

class Login extends Component {
    state = {
        email: ""
    }

    onChange = e => {
        this.setState({
            email: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        console.log(this.state);
    }

    render(){
        const { email } = this.state;
        return (
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