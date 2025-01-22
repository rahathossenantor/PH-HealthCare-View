import axiosBaseQuery from "@/axios/axiosBaseQuery";
import { baseServerApiUrl } from "@/constants/global.constants";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery({ baseUrl: baseServerApiUrl }),
    endpoints: () => ({}),
    tagTypes: [
        "specialties",
        "doctors",
        "schedules",
        "doctorSchedules",
        "me",
    ],
});

export default baseApi;
