import axiosBaseQuery from "@/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL as string }),
    endpoints: () => ({})
});

export default baseApi;
