import {
  LoginBodyType,
  LoginResponseType,
} from "@/components/Shared/Types/login";
import { userDetailType } from "@/components/Shared/Types/user";
import { prepareHeaders } from "@/library/utils/tokenManager";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL_HARDIK,
    prepareHeaders,
  }),
  tagTypes: ["Auth"],
  refetchOnMountOrArgChange: true,
  endpoints: builder => ({
    loginUser: builder.mutation<LoginResponseType, LoginBodyType>({
      query: data => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
    }),
    getUsersMe: builder.query<userDetailType, {}>({
      query: () => ({
        url: `/auth/me`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginUserMutation, useLazyGetUsersMeQuery } = authApi;
