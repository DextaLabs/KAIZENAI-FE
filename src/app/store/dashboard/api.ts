import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "./../../utils/tokenManager";
import store from "..";
import { setDashboardData } from ".";

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
      transformResponse: (response: { stickers: {} }) => {
        store.dispatch(setDashboardData([]));
        return response;
      },
    }),
  }),
});

export const { useGetDashboardDataQuery, useLazyGetDashboardDataQuery } =
  dashboardApi;
