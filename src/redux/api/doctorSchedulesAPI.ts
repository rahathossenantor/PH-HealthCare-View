import baseApi from "./baseAPI";

const doctorSchedulesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createDoctorSchedules: build.mutation({
            query: (data) => ({
                url: "/doctor-schedules/create-doctor-schedule",
                method: "POST",
                data
            }),
            invalidatesTags: ["doctorSchedules"],
        }),
        getDoctorsAllSchedules: build.query({
            query: (args: Record<string, any>) => ({
                url: "/doctor-schedules/doctor-schedules",
                method: "GET",
                params: args
            }),
            providesTags: ["doctorSchedules"],
        }),
    }),
});

export const {
    useCreateDoctorSchedulesMutation,
    useGetDoctorsAllSchedulesQuery,
} = doctorSchedulesApi;
