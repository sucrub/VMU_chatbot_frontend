import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../store/slices/authSlice';
import MainLayout from '../layouts/MainLayout';

const ProtectedRoute = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <MainLayout />;
};

export default ProtectedRoute;