import React, { useState } from "react";
import PageContainer from "../components/common/PageContainer";
import AdminLogin from "../components/admin/AdminLogin";
import AdminPanel from "../components/admin/AdminPanel";

function Admin() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (username: string, password: string) => {
        // Simple hardcoded check for demonstration
        if (username === "admin" && password === "password") {
            setLoggedIn(true);
            setError("");
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <PageContainer>
            {!loggedIn ? (
                <AdminLogin onLogin={handleLogin} error={error} />
            ) : (
                <AdminPanel />
            )}
        </PageContainer>
    );
}

export default Admin;