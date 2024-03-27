import { prepareHeaders } from "@/library/utils/tokenManager";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setTeamData } from ".";
import store from "..";

export const teamApi = createApi({
  reducerPath: "teamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders,
  }),
  tagTypes: ["Auth"],
  refetchOnMountOrArgChange: true,
  endpoints: builder => ({
    getTeamMember: builder.query({
      query: () => ({
        url: `/dummy/view_developer_data`,
        method: "GET",
      }),
      transformResponse: (response: any) => {
        store.dispatch(
          setTeamData({
            teamMember: response,
          })
        );
        return response;
      },
    }),
    getTeamMemberDetail: builder.query({
      query: () => ({
        url: `/view_developer_data`,
        method: "GET",
      }),
      transformResponse: (response: any) => {
        // store.dispatch(setDashboardData([]));
        return response;
      },
    }),
  }),
});

export const {
  useGetTeamMemberQuery,
  useLazyGetTeamMemberQuery,
  useGetTeamMemberDetailQuery,
  useLazyGetTeamMemberDetailQuery,
} = teamApi;
