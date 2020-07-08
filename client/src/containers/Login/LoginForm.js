import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default ({ email, errorMessage, onChange, onSubmit }) => (
    <div className = "LoginForm">
        <Form
            onSubmit = { onSubmit }
        >
            <Form.Group controlId="formBasicEmail">
            <Form.Text className="text-muted error">
                { errorMessage }
                </Form.Text>
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Email Address" 
                    value = { email }
                    name = "name"
                    onChange = { onChange }
                />
                <Form.Text className="text-muted">
                Use your MIT student email.
                </Form.Text>
            </Form.Group>
            <Button 
                variant="primary" 
                type="submit"
                disabled = { email.length === 0}
            >
                Submit
            </Button>
        </Form>
    </div>
);