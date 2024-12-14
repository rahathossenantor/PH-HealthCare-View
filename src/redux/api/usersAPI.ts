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
    }),
});

export const {
    useGetMeQuery
} = usersApi;
