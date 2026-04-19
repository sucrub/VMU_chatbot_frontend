import axiosInstance from "./axiosInstance"

const login = async (code) => {
    const res = await axiosInstance.post("/auth/login", { code });
    return res?.data;
}

export {
    login
}