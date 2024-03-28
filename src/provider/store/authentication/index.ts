import { userDetailType } from "@/components/Shared/Types/user";
import { createSlice } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../index";
import { authApi } from "./api";

export type AuthType = {
  loading: boolean;
  authenticated: boolean;
  token: string;
  profile: userDetailType;
  profileDetail: any;
  redirectTo: string;
  authCheck: boolean;
};

export const initialState = {
  loading: false,
  authenticated: false,
  token: "",
  profile: {
    "User Detail": {},
  } as userDetailType,
  authCheck: false,
  redirectTo: "/",
} as AuthType;

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAuthData: (state, action: { payload: Partial<AuthType> }) => {
      Object.assign(state, action.payload);
    },
    resetAuthData: state => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.loginUser.matchPending, state => {
      if (!state.loading) {
        state.loading = true;
      }
    });
    builder.addMatcher(authApi.endpoints.loginUser.matchFulfilled, state => {
      if (state.loading) {
        state.loading = false;
      }
    });
    builder.addMatcher(authApi.endpoints.loginUser.matchRejected, state => {
      if (state.loading) {
        state.loading = false;
      }
    });
  },
});

const selectAuthentication = (state: RootState) => state.authentication;
export const useAuthStore = () => {
  const authentication = useSelector(selectAuthentication);
  return useMemo(() => authentication, [authentication]);
};
export const { setAuthData, resetAuthData } = authenticationSlice.actions;
export default authenticationSlice.reducer;
