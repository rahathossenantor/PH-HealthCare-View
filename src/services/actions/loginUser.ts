"use server";

import { TLoginInputs } from "@/app/login/page";

const loginUser = async (payload: TLoginInputs) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            cache: "no-store"
        });
        const data = await res.json();
        return data;
    } catch (err: any) {
        console.error(err.message);
    };
};

export default loginUser;