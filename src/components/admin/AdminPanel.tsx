import { useState } from "react";
import { Nav } from "react-bootstrap";
import { ADMIN_SECTIONS } from "./adminConfig";
import AdminCRUD from "./AdminCRUD";

const AdminPanel = () => {
    const [activeSection, setActiveSection] = useState("projects");

    const section = ADMIN_SECTIONS.find(s => s.key === activeSection);

    return (
        <div className="admin-panel-flex">
            <nav className="admin-panel-sidebar">
                <Nav className="flex-column admin-panel-nav">
                    {ADMIN_SECTIONS.map(item => (
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
                {section ? <AdminCRUD {...section.config} /> : null}
            </main>
        </div>
    );
};

export default AdminPanel;