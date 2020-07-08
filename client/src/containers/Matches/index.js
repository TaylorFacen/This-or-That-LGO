import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import ClassmatesList from './ClassmatesList';

import apiService from '../../service/apiService';
import cookieService from '../../service/cookieService';

import './Matches.css';

class Matches extends Component {
    state = {
        isLoading: true,
        users: null 
    }

    componentDidMount(){
        const { user } = this.props;
        if ( user ) {
            cookieService.parseCookie()
            .then(cookieData => {
                if ( cookieData ) {
                    apiService.getUsers()
                    .then(usersResp => {
                        const users = usersResp.filter(u => u._id !== user._id).map(user => ({ 
                            ...user,
                            score: this.getScore(user)
                        })).sort((user1, user2) => user2.score - user1.score)
                        this.setState({ isLoading: false, users })
                    })
                } else {
                    window.location.replace(`/login`)
                }
            })
        } else {
            window.location.replace('/login')
        }
    }

    getScore(classmate) {
        const userAnswers = this.props.user.answers;
        const classmateAnswers = classmate.answers;

        const answerMatches = userAnswers.map(userAnswer => {
            return classmateAnswers.find(classmateAnswer => classmateAnswer.questionId === userAnswer.questionId)?.answerId === userAnswer.answerId
        })
        
        if ( answerMatches.length > 0 ) {
            return answerMatches.filter(a => a).length / answerMatches.length;
        } else {
            return 0
        }
    }

    render(){
        const { isLoading, users } = this.state;
        return !isLoading && (
            <div className = "Matches page">
                <h1>Class Matches</h1>
                <Button variant = "link">View my Answers</Button>
                <ClassmatesList users = { users } />
            </div>
        )
    }
}

export default Matches;