import baseApi from "./baseAPI";

const schedulesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createSchedules: build.mutation({
            query: (data) => ({
                url: "/schedules/create-schedule",
                method: "POST",
                data
            }),
            invalidatesTags: ["schedules"],
        }),
        getAllSchedules: build.query({
            query: (args: Record<string, any>) => ({
                url: "/schedules",
                method: "GET",
                params: args
            }),
            providesTags: ["schedules"],
        }),
    }),
});

export const {
    useCreateSchedulesMutation,
    useGetAllSchedulesQuery,
} = schedulesApi;
