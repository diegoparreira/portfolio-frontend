import { useState } from "react";
import { Nav } from "react-bootstrap";
import ProjectsCRUD from "./projects/ProjectsCRUD";
import SkillsCRUD from "./skills/SkillsCRUD";
import CertificationsCRUD from "./certifications/CertificationsCRUD";

const AdminPanel = () => {
    const [activeSection, setActiveSection] = useState("projects");

    const sections = [
        { key: "projects", label: "Projects" },
        { key: "skills", label: "Skills" },
        { key: "certifications", label: "Certifications" }
    ];

    const renderContent = () => {
        switch (activeSection) {
            case "projects":
                return <ProjectsCRUD />;
            case "skills":
                return <SkillsCRUD />;
            case "certifications":
                return <CertificationsCRUD />;
            default:
                return <ProjectsCRUD />;
        }
    };

    return (
        <div className="admin-panel-flex">
            <nav className="admin-panel-sidebar">
                <Nav className="flex-column admin-panel-nav">
                    {sections.map(item => (
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
                {renderContent()}
            </main>
        </div>
    );
};

export default AdminPanel;