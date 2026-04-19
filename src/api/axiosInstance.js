import axios from 'axios';
import { store } from '../store';
import { clearAuth } from '../store/slices/authSlice';
import { API_URL } from '../configs';

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor — attach token automatically
axiosInstance.interceptors.request.use(
    (config) => {
        const token = store.getState().auth.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor — handle 401 (expired/invalid token)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.log("TOKEN EXPIRED:", error.response);
            // store.dispatch(clearAuth());
            // window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;