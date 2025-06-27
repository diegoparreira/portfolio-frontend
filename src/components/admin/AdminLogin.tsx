import React, { useState } from "react";
import { Row, Form, Alert, Card } from "react-bootstrap";
import { ModernButton } from "./commons";

interface AdminLoginProps {
    onLogin: (username: string, password: string) => void;
    error: string;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, error }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin(username, password);
    };

    return (
        <Row className="admin-login-container">
            <Card className="admin-login-card p-4 border-0 shadow rounded-4">
                <Form onSubmit={handleSubmit} className="w-100">
                    <Form.Group className="mb-3" controlId="loginUsername">
                        <Form.Floating>
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                                size="lg"
                                className="rounded-pull shadow-sm"
                            />
                            <label htmlFor="">Username</label>
                        </Form.Floating>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="loginPassword">
                        <Form.Floating>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                                size="lg"
                                className="rounded-pull shadow-sm"
                            />
                            <label htmlFor="">Password</label>
                        </Form.Floating>
                    </Form.Group>
                    {error && <Alert variant="danger">{error}</Alert>}

                    <div className="d-flex justify-content-center mt-3">
                        <ModernButton
                            icon="login"
                            size="sm"
                            submit
                        />
                    </div>
                </Form>
            </Card>
        </Row>
    );
};

export default AdminLogin;
