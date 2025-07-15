import { useState } from 'react';
import AdminCRUD from './AdminCRUD';
import { ADMIN_SECTIONS } from './adminConfig';
import { useAuth } from '../../contexts/AuthContext';
import AdminSidebar from './AdminSidebar';

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
      <AdminSidebar
        user={user}
        sections={ADMIN_SECTIONS}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        handleLogout={handleLogout}
      />
      <main className="admin-panel-content">{renderContent()}</main>
    </div>
  );
};

export default AdminPanel;
