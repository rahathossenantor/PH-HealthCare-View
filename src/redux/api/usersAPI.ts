import baseApi from "./baseAPI";

const usersApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMe: build.query({
            query: () => ({
                url: "/users/me",
                method: "GET",
            }),
            providesTags: ["me"],
        }),
        updateMe: build.mutation({
            query: (data: any) => ({
                url: "/users/update-me",
                method: "PATCH",
                contentType: "multipart/form-data",
                data
            }),
            invalidatesTags: ["me"],
        }),
    }),
});

export const {
    useGetMeQuery,
    useUpdateMeMutation,
} = usersApi;
