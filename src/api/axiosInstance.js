import axios from 'axios';
import { store } from '../store';
import { API_URL } from '../configs';
import { clearAuth, setAuth } from '../store/slices/authSlice';

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
    async (error) => {
        if (
            error.response?.status === 401 &&
            error.response?.data?.error?.code === 'err.auth.invalid_token' &&
            !error.config._retry
        ) {
            const refreshToken = store.getState().auth.refreshToken;
            if (refreshToken) {
                try {
                    const res = await axios.post(`${API_URL}/auth/refresh`, { refreshToken });
                    if (res.status === 200) {
                        const { accessToken: newToken, refreshToken: newRefreshToken } = res.data.data;
                        store.dispatch(setAuth({
                            token: newToken,
                            refreshToken: newRefreshToken,
                            user: store.getState().auth.user,
                        }));

                        error.config._retry = true;
                        error.config.headers.Authorization = `Bearer ${newToken}`;
                        return axiosInstance.request(error.config);
                    }
                } catch {
                    // refresh itself failed, fall through to clearAuth
                }
            }

            store.dispatch(clearAuth());
            window.location.href = '/login';
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;