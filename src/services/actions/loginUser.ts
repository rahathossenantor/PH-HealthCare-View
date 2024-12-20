// "use server";

import { baseServerApiUrl } from "@/constants/global.constants";
import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const loginUser = async (payload: FieldValues) => {
    try {
        const res = await fetch(`${baseServerApiUrl}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            credentials: "include",
            // cache: "no-store"
        });
        const data = await res.json();

        if (data?.data?.accessToken) {
            cookies().set("accessToken", data?.data?.accessToken);
            redirect("/dashboard");
        };

        return data;
    } catch (err: any) {
        console.error(err.message);
    };
};

export default loginUser;
