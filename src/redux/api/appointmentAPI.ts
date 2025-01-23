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
    }),
});

export const {
    useCreateAppointmentMutation,
} = appointmentApi;
