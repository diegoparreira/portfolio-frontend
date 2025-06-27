import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import Home from './pages/Home';
import ErrorBoundary from './components/commons/ErrorBoundary';

// Lazy load admin page for better performance
const Admin = lazy(() => import('./pages/Admin'));

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <Suspense
              fallback={
                <div className="d-flex justify-content-center align-items-center min-vh-100">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              }
            >
              <Admin />
            </Suspense>
          }
        />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
