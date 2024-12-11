import baseApi from "./baseAPI";

const specialtyApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createSpecialty: build.mutation({
            query: (data) => ({
                url: "/specialties/create-specialty",
                method: "POST",
                contentType: "multipart/form-data",
                data
            }),
            invalidatesTags: ["specialties"],
        }),
        getAllSpecialties: build.query({
            query: () => ({
                url: "/specialties",
                method: "GET"
            }),
            providesTags: ["specialties"],
        }),
        deleteSpecialty: build.mutation({
            query: (id) => ({
                url: `/specialties/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["specialties"],
        }),
    }),
});

export const {
    useCreateSpecialtyMutation,
    useGetAllSpecialtiesQuery,
    useDeleteSpecialtyMutation
} = specialtyApi;
