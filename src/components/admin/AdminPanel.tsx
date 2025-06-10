import { useState } from "react";
import { Col, Container, ListGroup, Nav, Row } from "react-bootstrap";
import ProjectsCRUD from "../projects/ProjectsCRUD";

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
                return <ProjectsCRUD />;
            case "skills":
                return <div>Skills CRUD goes here</div>;
            case "certifications":
                return <div>Certifications CRUD goes here</div>;
            default:
                return null;
        }
    };

    return (
        <div className="admin-panel-flex">
            <nav className="admin-panel-sidebar">
                <Nav className="flex-column admin-panel-nav">
                    {NAV_ITEMS.map(item => (
                        <Nav.Link
                            as="button"
                            key={item.key}
                            active={activeSection === item.key}
                            onClick={() => setActiveSection(item.key)}
                            className="admin-panel-nav-item"
                        >
                            {item.label}
                        </Nav.Link>
                    ))}
                </Nav>
            </nav>
            <main className="admin-panel-content">
                {renderSection()}
            </main>
        </div>
    );
};

export default AdminPanel;