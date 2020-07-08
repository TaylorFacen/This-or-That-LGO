import React from 'react';
import { Button, Table } from 'react-bootstrap';

export default({ users }) => (
    <div className = "ClassmatesList">
        <Table>
            <thead>
                <tr>
                    <th>Classmate</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                { users.map(user => (
                    <tr key = { user._id }>
                        <td><Button variant = "link">{ user.userName }</Button></td>
                        <td>{ user.score.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}) }</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
);