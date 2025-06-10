import { useState } from "react";
import AdminLogin from "../components/admin/AdminLogin";
import AdminPanel from "../components/admin/AdminPanel";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

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
            <div className="admin-content">
                {!loggedIn ? (
                    <AdminLogin onLogin={handleLogin} error={error} />
                ) : (
                    <AdminPanel />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Admin;