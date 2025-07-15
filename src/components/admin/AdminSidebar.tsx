import { Button } from 'react-bootstrap';
import { BoxArrowRight } from 'react-bootstrap-icons';
import React from 'react';
import { Nav } from 'react-bootstrap';
import type { AdminSectionConfig } from './adminConfig';

interface AdminSidebarProps {
  user: { username: string } | null;
  sections: AdminSectionConfig[];
  activeSection: string;
  setActiveSection: (key: string) => void;
  handleLogout: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({
  user,
  sections,
  activeSection,
  setActiveSection,
  handleLogout,
}) => {
  return (
    <nav className="admin-panel-sidebar">
      <div className="d-flex flex-column h-100">
        <div className="p-3 border-bottom">
          <small className="text-muted">Welcome, {user?.username}</small>
        </div>
        <Nav className="flex-column admin-panel-nav flex-grow-1">
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
        <div className="p-3 border-top">
          <Button variant="outline-secondary" size="sm" onClick={handleLogout} className="w-100">
            <BoxArrowRight className="me-2" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default AdminSidebar;
