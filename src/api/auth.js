import axiosInstance from "./axiosInstance"

const login = async (code) => {
    const res = await axiosInstance.post("/auth/login", { code });
    return res?.data;
}

const me = async () => {
    const res = await axiosInstance.get("/user/me");
    return res?.data;
}

const refresh = async (refreshToken) => {
    const res = await axiosInstance.post("/auth/refresh", { refreshToken });
    return res?.data;
}

export {
    login,
    me,
    refresh
}