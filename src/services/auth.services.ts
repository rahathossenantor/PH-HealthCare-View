import { setToLocalStorage } from "@/utils/localStorage";

export const storeUserToken = (token: string) => {
    return setToLocalStorage("accessToken", token);
};
