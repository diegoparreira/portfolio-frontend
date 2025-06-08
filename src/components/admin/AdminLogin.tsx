import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap";

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
        <Row className="w-100 d-flex align-items-center justify-content-center bg-light">
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Card className="p-4 border-0 shadow rounded-4">
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
                            <Button variant="primary" type="submit" className="main-button px-5 py-2">Login</Button>
                        </div>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default AdminLogin;
