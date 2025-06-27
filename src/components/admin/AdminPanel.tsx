import { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { BoxArrowRight } from 'react-bootstrap-icons';
import AdminCRUD from './AdminCRUD';
import { ADMIN_SECTIONS } from './adminConfig';
import { useAuth } from '../../contexts/AuthContext';

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('projects');
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const currentSection = ADMIN_SECTIONS.find(section => section.key === activeSection);

  const renderContent = () => {
    if (!currentSection) {
      return <div>Section not found</div>;
    }

    return <AdminCRUD {...currentSection.config} />;
  };
  return (
    <div className="admin-panel-flex">
      <nav className="admin-panel-sidebar">
        <div className="d-flex flex-column h-100">
          <div className="p-3 border-bottom">
            <small className="text-muted">Welcome, {user?.username}</small>
          </div>
          <Nav className="flex-column admin-panel-nav flex-grow-1">
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
          <div className="p-3 border-top">
            <Button variant="outline-secondary" size="sm" onClick={handleLogout} className="w-100">
              <BoxArrowRight className="me-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>
      <main className="admin-panel-content">{renderContent()}</main>
    </div>
  );
};

export default AdminPanel;
