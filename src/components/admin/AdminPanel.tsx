import { useState } from "react";
import Navbar from "../navbar/Navbar";

const NAV_ITEMS = [
    { key: "projects", label: "Projects" },
    { key: "skills", label: "Skills" },
    { key: "certifications", label: "Certifications" },
];

const AdminPanel = () => {
    const [activeSection, setActiveSection] = useState("projects");

    // Placeholder components for each section
    const renderSection = () => {
        switch (activeSection) {
            case "projects":
                return <div>Project CRUD goes here</div>;
            case "skills":
                return <div>Skills CRUD goes here</div>;
            case "certifications":
                return <div>Certifications CRUD goes here</div>;
            default:
                return null;
        }
    };

    return (

        <>
            <Navbar />
            <div className="d-flex" style={{ minHeight: "80vh" }}>

                <nav className="bg-light border-end" style={{ minWidth: 220 }}>
                    <ul className="nav flex-column py-4 px-2 h-100">
                        {NAV_ITEMS.map(item => (
                            <li className="nav-item mb-2" key={item.key}>
                                <button
                                    className={`nav-link w-100 text-start ${activeSection === item.key ? "active fw-bold" : ""}`}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setActiveSection(item.key)}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Main content */}
                <main className="flex-grow-1 p-4 bg-white">
                    {renderSection()}
                </main>
            </div>
        </>
    );
};

export default AdminPanel;