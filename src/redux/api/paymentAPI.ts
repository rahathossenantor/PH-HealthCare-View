import baseApi from "./baseAPI";

const paymentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        initialPayment: build.mutation({
            query: (id: string) => ({
                url: `/payment/init/${id}`,
                method: "POST",
            }),
            invalidatesTags: ["payment"],
        }),
    }),
});

export const { useInitialPaymentMutation } = paymentApi;

export default paymentApi;
