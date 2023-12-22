import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { z } from "zod";

const authSchema = z.object({
  loading: z.boolean(),
  authenticated: z.boolean(),
  token: z.string(),
  redirectTo: z.string(),
  profile: z.object({}),
});

type UpdateAuthSchemaType = z.input<typeof updateAuthSlice>;
type sliceStateKey = keyof UpdateAuthSchemaType;
const updateAuthSlice = authSchema.partial();

export type AuthType = {
  loading: boolean;
  authenticated: boolean;
  token: string;
  profile: {};
  redirectTo: string;
};

export const initialState = {
  loading: false,
  authenticated: false,
  token: "",
  profile: {},
  redirectTo: "/",
} as AuthType;

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<UpdateAuthSchemaType>) => {
      Object.keys(action.payload).forEach(i => {
        const key: sliceStateKey = i as sliceStateKey;
        // @ts-ignore
        state[key] = action.payload[key];
      });
    },
  },
});

const selectAuthentication = (state: RootState) => state.authentication;
export const useAuthStore = () => {
  const authentication = useSelector(selectAuthentication);
  return useMemo(() => authentication, [authentication]);
};
export const { setAuthData } = authenticationSlice.actions;
export default authenticationSlice.reducer;
