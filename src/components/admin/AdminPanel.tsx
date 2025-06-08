import { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
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
        <Container fluid className="d-flex flex-column min-vh-100 p-0">
            <Container fluid className="admin-panel-container">
                <Row className="admin-panel-row flex-grow-1 w-100">
                    <Col xs={12} md={3} lg={2} className="mb-4 mb-md-0 d-flex flex-column admin-panel-sidebar">
                        <ListGroup as="ul" variant="flush" className="flex-grow-1">
                            {NAV_ITEMS.map(item => (
                                <ListGroup.Item
                                    as="button"
                                    key={item.key}
                                    action
                                    active={activeSection === item.key}
                                    onClick={() => setActiveSection(item.key)}
                                    className="text-start fw-bold"
                                >
                                    {item.label}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col xs={12} md={9} lg={10} className="d-flex flex-column">
                        <div className="admin-panel-content">
                            {renderSection()}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default AdminPanel;