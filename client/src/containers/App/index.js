import React, { Component } from 'react';
import './App.css';

import apiService from '../../service/apiService';
import cookieService from '../../service/cookieService';

import Navigation from '../Navigation';
import Router from '../Router';

class App extends Component {
    state = {
        user: null,
        questions: null,
        isLoading: true
    }

    componentDidMount(){
        cookieService.parseCookie()
        .then(cookieData => {
            if ( cookieData ) {
                const { email } = cookieData;
                // Get user and add to state
                const userPromise = apiService.getUser(email);
                const questionsPromise = apiService.getQuestions();
                Promise.all([userPromise, questionsPromise])
                .then(responses => {
                    const user = responses[0].data;
                    const questions = responses[1];
                    this.setState({
                        user,
                        questions,
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
        const { isLoading, user, questions } = this.state;
        return !isLoading && (
            <div className = "App">
                <Navigation />
                <Router user = { user } questions = { questions } />
            </div>
        )
    }
}

export default App;