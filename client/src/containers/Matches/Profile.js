import React from 'react';
import { Modal, Table } from 'react-bootstrap';

export default ({ user, questions, show, handleClose }) => (
    <Modal show = { show } onHide = { handleClose }>
        <Modal.Header closeButton>
            <Modal.Title>{ user.userName }</Modal.Title>
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
                    { user.answers.map(userAnswer => (
                        <tr key = { userAnswer._id }>
                            <td>{ questions.find(question => question._id === userAnswer.questionId).question }</td>
                            <td>{ questions.find(question => question._id === userAnswer.questionId).answerChoices.find(ac => ac._id === userAnswer.answerId).answer }</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Modal.Body>
    </Modal>
)