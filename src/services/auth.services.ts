import axiosInstance from "@/axios/axiosInstance";
import decodeJwtToken from "@/utils/decodeJwtToken";
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";

export const storeUserToken = (token: string) => {
    return setToLocalStorage("accessToken", token);
};

export const getUser = () => {
    const token = getFromLocalStorage("accessToken");
    if (token) {
        const user: any = decodeJwtToken(token);
        return {
            ...user,
            role: user.role.toLowerCase(),
        };
    };
};

export const clearUser = () => {
    return removeFromLocalStorage("accessToken");
};

export const isLoggedIn = () => {
    return !!getFromLocalStorage("accessToken");
};

export const getRefreshToken = async () => {
    const res = await axiosInstance({
        url: `https://ph-heathcare-core.vercel.app/api/v1/auth/refresh-token`,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    });
    return res;
};
