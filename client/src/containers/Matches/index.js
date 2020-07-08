import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import ClassmatesList from './ClassmatesList';
import Profile from './Profile';

import apiService from '../../service/apiService';
import cookieService from '../../service/cookieService';

import './Matches.css';

class Matches extends Component {
    state = {
        isLoading: true,
        users: null,
        focusUser: null,
        showUserProfile: false    
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

    handleUserProfileClose(){
        this.setState({
            focusUser: null,
            showUserProfile: false
        })
    }

    handleUserProfileOpen(user){
        this.setState({
            focusUser: user,
            showUserProfile: true
        })
    }

    render(){
        const { isLoading, users, showUserProfile, focusUser } = this.state;
        const { questions, user } = this.props;
        return !isLoading && (
            <div className = "Matches page">
                <h1>Class Matches</h1>
                <Button variant = "link" onClick = { () => this.handleUserProfileOpen(user) }>View my Answers</Button>
                <ClassmatesList users = { users } handleUserProfileOpen = { this.handleUserProfileOpen.bind(this) }/>
                { showUserProfile ? (
                    <Profile 
                        user = { focusUser } 
                        questions = { questions }
                        show = { showUserProfile }
                        handleClose = { this.handleUserProfileClose.bind(this) }
                    />
                ) : null }
            </div>
        )
    }
}

export default Matches;