"use server";

const registerPatients = async (payload: FormData) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/create-patient`, {
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
