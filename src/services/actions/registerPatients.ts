"use server";

import { baseServerApiUrl } from "@/constants/global.constants";

const registerPatients = async (payload: FormData) => {
    try {
        const res = await fetch(`${baseServerApiUrl}/users/create-patient`, {
            method: "POST",
            body: payload,
            cache: "no-store"
        });
        const data = await res.json();
        return data;
    } catch (err: any) {
        console.error(err.message);
    };
};

export default registerPatients;
