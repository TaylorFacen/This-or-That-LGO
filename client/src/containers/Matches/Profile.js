import React from 'react';
import { Modal, Table } from 'react-bootstrap';

export default ({ userAnswers, focusUser, questions, show, handleClose }) => {
    function isMatch(questionId, answerId){
        return userAnswers.find(ua => ua.questionId === questionId)?.answerId === answerId
    }

    return (
        <Modal size="lg" className = "Profile" show = { show } onHide = { handleClose }>
            <Modal.Header closeButton>
                <Modal.Title>{ focusUser.userName }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table>
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        { focusUser.answers.map(userAnswer => (
                            <tr key = { userAnswer._id }>
                                <td>{ questions.find(question => question._id === userAnswer.questionId).question }</td>
                                <td className = { isMatch(userAnswer.questionId, userAnswer.answerId) ? "match" : null }>{ questions.find(question => question._id === userAnswer.questionId).answerChoices.find(ac => ac._id === userAnswer.answerId).answer }</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Modal.Body>
        </Modal>
    )
}