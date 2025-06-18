
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectPage';
import AboutMePage from './pages/AboutMe';
import ContactsPage from './pages/ContactPage';
import AdminLogin from './pages/AdminLogin';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './pages/Dashboard';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/admin-login" element={
          <PublicRoute>
            <AdminLogin />
          </PublicRoute>
        } />
        <Route path="/admin" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;