import { useState } from "react";
import AdminLogin from "../components/admin/AdminLogin";
import AdminPanel from "../components/admin/AdminPanel";
import { Container, Row } from "react-bootstrap";
import Navbar from "../components/navbar/Navbar";

function Admin() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (username: string, password: string) => {
        if (username === "admin" && password === "password") {
            setLoggedIn(true);
            setError("");
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="min-vh-100 d-flex flex-column bg-light">
            <Navbar />
            <Container fluid className="flex-grow-1 d-flex align-items-center justify-content-center p-0">
                {!loggedIn ? (
                    <AdminLogin onLogin={handleLogin} error={error} />
                ) : (
                    <AdminPanel />
                )}
            </Container>
        </div>
    );
}

export default Admin;