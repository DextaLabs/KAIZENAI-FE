import { createSlice } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../index";
import { teamApi } from "./api";

export type TeamMemberType = {
  loading: boolean;
  teamMember: any[];
  memberDetail: any;
};

export const initialState = {
  loading: false,
  teamMember: [],
  memberDetail: {},
} as TeamMemberType;

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    setTeamData: (state, action: { payload: Partial<TeamMemberType> }) => {
      Object.assign(state, action.payload);
    },
    resetTeamData: state => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: builder => {
    builder.addMatcher(teamApi.endpoints.getTeamMember.matchPending, state => {
      if (!state.loading) {
        state.loading = true;
      }
    });
    builder.addMatcher(
      teamApi.endpoints.getTeamMember.matchFulfilled,
      state => {
        if (state.loading) {
          state.loading = false;
        }
      }
    );
    builder.addMatcher(teamApi.endpoints.getTeamMember.matchRejected, state => {
      if (state.loading) {
        state.loading = false;
      }
    });
    builder.addMatcher(
      teamApi.endpoints.getTeamMemberDetail.matchPending,
      state => {
        if (!state.loading) {
          state.loading = true;
        }
      }
    );
    builder.addMatcher(
      teamApi.endpoints.getTeamMemberDetail.matchFulfilled,
      state => {
        if (state.loading) {
          state.loading = false;
        }
      }
    );
    builder.addMatcher(
      teamApi.endpoints.getTeamMemberDetail.matchRejected,
      state => {
        if (state.loading) {
          state.loading = false;
        }
      }
    );
  },
});

const selectTeam = (state: RootState) => state.teams;
export const useTeamStore = () => {
  const team = useSelector(selectTeam);
  return useMemo(() => team, [team]);
};
export const { setTeamData, resetTeamData } = teamsSlice.actions;
export default teamsSlice.reducer;
