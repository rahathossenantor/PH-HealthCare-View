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
        forgotPassword: build.mutation({
            query: (data) => ({
                url: "/auth/forgot-password",
                method: "POST",
                data
            }),
        }),
        resetPassword: build.mutation({
            query: (data) => ({
                url: "/auth/reset-password",
                method: "POST",
                data
            }),
        }),
    }),
});

export const {
    useChangePasswordMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation
} = authApi;
