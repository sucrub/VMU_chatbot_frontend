import axiosInstance from "./axiosInstance";

const getClassList = async (params) => {
    const res = await axiosInstance.get("/class/list", { params });
    return res?.data;
};

export {
    getClassList
}