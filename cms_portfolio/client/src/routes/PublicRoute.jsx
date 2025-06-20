// src/routes/PublicRoute.jsx
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? <Navigate to="/admin" replace /> : children;
};

export default PublicRoute;
