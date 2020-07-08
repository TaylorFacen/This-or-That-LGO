import React, { Component } from 'react';

import Question from './Question';

import apiService from '../../service/apiService';

import './Home.css';

class Home extends Component {
    state = {
        isLoading: true,
        user: null,
        questions: null
    }

    componentDidMount(){
        const { user } = this.props;
        if ( user ) {
            apiService.getQuestions()
            .then(questions => {
                console.log(questions.map(question => question.answerChoices.length))
                this.setState({ user, questions, isLoading: false})
            })
        } else {
            window.location.replace('/login')
        }
        
    }

    getNextUnansweredQuestion(){
        const { questions, user } = this.state;
        const answeredQuestions = user && user.answers.map(answer => answer.questionId);
        const unansweredQuestions = questions && questions.filter(question => !answeredQuestions.includes(question._id));

        if (unansweredQuestions && unansweredQuestions.length > 0) {
            return unansweredQuestions[0]
        } else {
            return null
        }
    }

    selectAnswer(questionId, answerId){
        const { user } = this.state;
        const userId = user._id;
        apiService.postAnswerChoice(userId, questionId, answerId)
        .then(() => {
            // Add response to state so that next question shows
            user.answers.push({
                questionId,
                answerId
            })
            this.setState({ user })
        })
        .catch(error => console.log(error))
    }


    render(){
        const { isLoading, user } = this.state;
        const question = this.getNextUnansweredQuestion();
        console.log(user)

        return !isLoading && (
            <div className = "Home page">
                <h2>Welcome { user.userName } to "This or That" - LGO edition!</h2>
                <Question question = { question } selectAnswer = { this.selectAnswer.bind(this) } />
            </div>
        )
    }
}

export default Home;