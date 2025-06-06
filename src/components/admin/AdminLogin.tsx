import React, { useState } from "react";
import Navbar from "../navbar/Navbar";

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
        <>
            <Navbar />
            <div className="container mt-5">
                <h2>Admin Login</h2>
                <form className="text-center w-100" onSubmit={handleSubmit} style={{ writingMode: "horizontal-tb" }}>
                    <div className="mb-3">
                        <input
                            className="form-control"
                            type="text"
                            name="username"
                            placeholder="Email"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                            style={{ writingMode: "horizontal-tb" }}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            style={{ writingMode: "horizontal-tb" }}
                        />
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mb-3">
                        <button className="btn btn-primary d-block w-100" type="submit" style={{ writingMode: "horizontal-tb" }}>Login</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AdminLogin;
