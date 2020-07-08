import React from 'react';
import { Image, Button, Row, Col } from 'react-bootstrap';

export default ({ question, selectAnswer }) => {
    if ( question ) {
        return (
            <div className = "Question">
                <p>Select which option you like best and see who else in the class you match with!</p>
                <h4>{ question.question }</h4>
                <Image className = "question-image" src = { question.imageURL } fluid />
                <Row className = "answer-choices">
                    { question.answerChoices.map(answer => (
                        <Col xs = { 12 } sm = { 12 } md = { true } lg = { true } key = { answer._id }>
                            <Button 
                                onClick = { () => selectAnswer(question._id, answer._id) }
                                variant="outline-dark" 
                            >{ answer.answer }</Button>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    } else {
        return <p>You've answered all of the questions! <a href = "/matches">Check out your matches in the class.</a></p>
    }
}