"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setCookie = (token: string, options?: Record<string, any>) => {
    cookies().set("accessToken", token);

    if (options?.redirectUrl) {
        redirect(options?.redirectUrl);
    };
};

export const removeCookies = (keys: string[]) => {
    keys.forEach((key: string) => cookies().delete(key));
};
