import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { dashboardApi } from "./api";

export type DashboardDataType = {
  loading: boolean;
  data: [];
};

export const initialState = {
  loading: false,
  data: [] as [],
} as DashboardDataType;

export const dashboardSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setDashboardData: (state, action: { payload: [] }) => {
      state["data"] = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      dashboardApi.endpoints.getDashboardData.matchPending,
      (state, { payload }) => {
        if (!state.loading) {
          state.loading = true;
        }
      }
    );
    builder.addMatcher(
      dashboardApi.endpoints.getDashboardData.matchFulfilled,
      (state, { payload }) => {
        if (state.loading) {
          state.loading = false;
        }
      }
    );
    builder.addMatcher(
      dashboardApi.endpoints.getDashboardData.matchRejected,
      (state, { payload }) => {
        if (state.loading) {
          state.loading = false;
        }
      }
    );
  },
});

const selectHome = (state: RootState) => state.dashboard;
export const useDashboardStore = () => {
  const dashboard = useSelector(selectHome);
  return useMemo(() => dashboard, [dashboard]);
};
export const { setDashboardData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
