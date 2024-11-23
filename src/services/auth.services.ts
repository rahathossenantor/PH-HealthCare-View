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
