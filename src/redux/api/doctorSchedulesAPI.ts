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
            query: () => ({
                url: "/doctor-schedules/doctor-schedules",
                method: "GET",
            }),
            providesTags: ["doctorSchedules"],
        }),
    }),
});

export const {
    useCreateDoctorSchedulesMutation,
    useGetDoctorsAllSchedulesQuery,
} = doctorSchedulesApi;
