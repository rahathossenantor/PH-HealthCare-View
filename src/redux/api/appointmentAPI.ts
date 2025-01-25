import baseApi from "./baseAPI";

export const appointmentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createAppointment: build.mutation({
            query: (data) => ({
                url: "/appointments/create-appointment",
                method: "POST",
                data,
            }),
            invalidatesTags: ["appointment"],
        }),
        getMyAppointments: build.query({
            query: (args: Record<string, any>) => ({
                url: "/appointments/my-appointments",
                method: "GET",
                params: args,
            })
        }),
    }),
});

export const {
    useCreateAppointmentMutation,
    useGetMyAppointmentsQuery,
} = appointmentApi;
