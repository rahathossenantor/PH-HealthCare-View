import { TDoctor, TMeta } from "@/types/types.global";
import baseApi from "./baseAPI";

const doctorsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createDoctor: build.mutation({
            query: (data) => ({
                url: "/users/create-doctor",
                method: "POST",
                contentType: "multipart/form-data",
                data
            }),
            invalidatesTags: ["doctors"],
        }),
        getAllDoctors: build.query({
            query: () => ({
                url: "/doctors",
                method: "GET"
            }),
            // transformResponse: (response: TDoctor, meta: TMeta) => ({
            //     doctors: response,
            //     meta
            // }),
            providesTags: ["doctors"],
        }),
    }),
});

export const {
    useCreateDoctorMutation,
    useGetAllDoctorsQuery,
} = doctorsApi;
