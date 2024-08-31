import {
  LoginBodyType,
  LoginResponseType,
} from "../../../components/Shared/Types/login";
import { userDetailType } from "../../../components/Shared/Types/user";
import { prepareHeaders } from "../../../library/utils/tokenManager";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAuthData } from ".";
import store from "..";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders,
  }),
  tagTypes: ["Auth"],
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginResponseType, LoginBodyType>({
      query: (data) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
    }),
    loginUserDetail: builder.mutation<LoginResponseType, {}>({
      query: () => ({
        url: `/auth/login_user_data`,
        method: "POST",
        body: {},
      }),
      transformResponse: (response: any) => {
        store.dispatch(
          setAuthData({ profileDetail: response?.feedback_data?.[0] })
        );
        return response;
      },
    }),
    getUsersMe: builder.query<userDetailType, {}>({
      query: () => ({
        url: `/auth/me`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useLazyGetUsersMeQuery,
  useLoginUserDetailMutation,
} = authApi;
