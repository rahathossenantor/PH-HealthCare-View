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
            query: (args: Record<string, any>) => ({
                url: "/doctors",
                method: "GET",
                params: args
            }),
            providesTags: ["doctors"],
        }),
        getSingleDoctor: build.query({
            query: (id: string) => ({
                url: `/doctors/${id}`,
                method: "GET",
            }),
        }),
        updateDoctor: build.mutation({
            query: (data) => ({
                url: `/doctors/${data.id}`,
                method: "PATCH",
                data,
            }),
            invalidatesTags: ["doctors", "me"],
        }),
        deleteDoctor: build.mutation({
            query: (id) => ({
                url: `/doctors/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["doctors"],
        }),
    }),
});

export const {
    useCreateDoctorMutation,
    useGetAllDoctorsQuery,
    useGetSingleDoctorQuery,
    useDeleteDoctorMutation,
    useUpdateDoctorMutation,
} = doctorsApi;
