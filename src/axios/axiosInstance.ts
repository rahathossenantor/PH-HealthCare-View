import { getFromLocalStorage } from "@/utils/localStorage";
import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

axiosInstance.interceptors.request.use(function (config) {
    const accessToken = getFromLocalStorage("accessToken");

    if (accessToken) {
        config.headers.Authorization = accessToken;
    };

    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
    // @ts-ignore
    function (response) {
        const res = {
            data: response?.data?.data,
            meta: response?.data?.meta || null,
        };
        return res;
    },
    function (error) {
        const res = {
            statusCode: error?.response?.statusCode || 500,
            message: error?.response?.message || "Something went wrong!",
            error: error?.response?.data?.error || null,
        };
        return res;
    }
);

export default axiosInstance;
