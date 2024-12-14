import axiosBaseQuery from "@/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery({ baseUrl: "https://ph-heathcare-core.vercel.app/api/v1" }),
    // baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL as string }),
    endpoints: () => ({}),
    tagTypes: [
        "specialties",
        "doctors",
        "schedules",
        "me",
    ],
});

export default baseApi;
