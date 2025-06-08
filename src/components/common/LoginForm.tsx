import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

interface LoginFormProps {
    onLogin: (username: string, password: string) => void;
    error: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, error }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin(username, password);
    };

    return (
        <Form className="login-form-container" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="loginUsername">
                <Form.Control
                    type="text"
                    placeholder="Email"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginPassword">
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="mb-3">
                <Button variant="primary" type="submit" className="w-100">Login</Button>
            </div>
        </Form>
    );
};

export default LoginForm;
