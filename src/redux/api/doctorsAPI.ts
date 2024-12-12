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
    }),
});

export const {
    useCreateDoctorMutation,
} = doctorsApi;
