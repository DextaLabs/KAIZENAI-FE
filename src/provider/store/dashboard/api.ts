import { prepareHeaders } from "@/library/utils/tokenManager";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setDashboardData } from ".";
import store from "..";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    prepareHeaders,
  }),
  tagTypes: ["dashboard"],
  refetchOnMountOrArgChange: true,
  endpoints: builder => ({
    getDashboardData: builder.query({
      query: () => `/`,
      transformResponse: (response: any) => {
        store.dispatch(setDashboardData([]));
        return response;
      },
    }),
  }),
});

export const { useGetDashboardDataQuery, useLazyGetDashboardDataQuery } =
  dashboardApi;
