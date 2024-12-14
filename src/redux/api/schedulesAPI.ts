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
    }),
});

export const {
    useCreateSchedulesMutation
} = schedulesApi;
