import baseApi from "./baseAPI";

const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        changePassword: build.mutation({
            query: (data) => ({
                url: "/auth/change-password",
                method: "POST",
                data
            }),
            invalidatesTags: ["me"],
        }),
    }),
});

export const {
    useChangePasswordMutation
} = authApi;
