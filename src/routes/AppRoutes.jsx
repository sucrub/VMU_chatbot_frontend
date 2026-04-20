import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from '../views/login';
import Example from '../views/example';
import Home from '../views/home';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { auth } from '../api';
import { clearAuth } from '../store/slices/authSlice';
import { store } from '../store';
import LoadingScreen from '../components/loadingScreen';

const AppRoutes = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = store.getState().auth.token;
            if (token) {
                try {
                    await auth.me();
                } catch (error) {
                    dispatch(clearAuth());
                }
            }
            setIsLoading(false);
        };
        checkAuth();
    }, [dispatch]);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />

            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/example" element={<Example />} />
                {/* Add more protected routes here */}
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};

export default AppRoutes;