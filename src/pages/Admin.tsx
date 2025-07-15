import { useAuth } from '../contexts/AuthContext';
import AdminLogin from '../components/admin/AdminLogin';
import AdminPanel from '../components/admin/AdminPanel';
import Navbar from '../components/commons/navbar/Navbar';
import Footer from '../components/commons/footer/Footer';
import { Spinner } from 'react-bootstrap';

function Admin() {
  const { isAuthenticated, isLoading, login } = useAuth();

  const handleLogin = async (username: string, password: string) => {
    const success = await login(username, password);
    if (!success) {
      throw new Error('Invalid credentials');
    }
  };

  if (isLoading) {
    return (
      <div className="min-vh-100 d-flex flex-column bg-light">
        <Navbar />
        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          <Spinner animation="border" variant="primary" />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar />
      <div className="admin-content">
        {!isAuthenticated ? <AdminLogin onLogin={handleLogin} /> : <AdminPanel />}
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
