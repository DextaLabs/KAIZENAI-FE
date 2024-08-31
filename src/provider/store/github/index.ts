import { createSlice } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "..";
import { githubApi } from "./api";
import {
  RepoCommitsType,
  RepoContributionType,
  RepoDetailType,
  RepoPullsType,
  ReposType,
} from "../../../components/Shared/Types/github";

export type GithubType = {
  loading: boolean;
  repos: ReposType;
  selectedRepo?: string;
  contribution: RepoContributionType;
  commits: RepoCommitsType;
  pullRequests: RepoPullsType;
  repoDetail: RepoDetailType;
};

export const initialState = {
  loading: false,
  repos: [],
  contribution: [],
  commits: [],
  pullRequests: {} as RepoPullsType,
  repoDetail: {} as RepoDetailType,
  selectedRepo: undefined,
} as GithubType;

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    setGithubData: (state, action: { payload: Partial<GithubType> }) => {
      Object.assign(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(githubApi.endpoints.fetchRepos.matchPending, (state) => {
      if (!state.loading) {
        state.loading = true;
      }
    });
    builder.addMatcher(
      githubApi.endpoints.fetchRepos.matchFulfilled,
      (state) => {
        if (state.loading) {
          state.loading = false;
        }
      }
    );
    builder.addMatcher(
      githubApi.endpoints.fetchRepos.matchRejected,
      (state) => {
        if (state.loading) {
          state.loading = false;
        }
      }
    );
    builder.addMatcher(
      githubApi.endpoints.fetchRepoDetail.matchPending,
      (state) => {
        if (!state.loading) {
          state.loading = true;
        }
      }
    );
    builder.addMatcher(
      githubApi.endpoints.fetchRepoDetail.matchFulfilled,
      (state) => {
        if (state.loading) {
          state.loading = false;
        }
      }
    );
    builder.addMatcher(
      githubApi.endpoints.fetchRepoDetail.matchRejected,
      (state) => {
        if (state.loading) {
          state.loading = false;
        }
      }
    );
    builder.addMatcher(
      githubApi.endpoints.fetchRepoContribution.matchPending,
      (state) => {
        if (!state.loading) {
          state.loading = true;
        }
      }
    );
    builder.addMatcher(
      githubApi.endpoints.fetchRepoContribution.matchFulfilled,
      (state) => {
        if (state.loading) {
          state.loading = false;
        }
      }
    );
    builder.addMatcher(
      githubApi.endpoints.fetchRepoContribution.matchRejected,
      (state) => {
        if (state.loading) {
          state.loading = false;
        }
      }
    );
    builder.addMatcher(
      githubApi.endpoints.fetchRepoCommits.matchPending,
      (state) => {
        if (!state.loading) {
          state.loading = true;
        }
      }
    );
    builder.addMatcher(
      githubApi.endpoints.fetchRepoCommits.matchFulfilled,
      (state) => {
        if (state.loading) {
          state.loading = false;
        }
      }
    );
    builder.addMatcher(
      githubApi.endpoints.fetchRepoCommits.matchRejected,
      (state) => {
        if (state.loading) {
          state.loading = false;
        }
      }
    );
    builder.addMatcher(
      githubApi.endpoints.fetchRepoPulls.matchPending,
      (state) => {
        if (!state.loading) {
          state.loading = true;
        }
      }
    );
    builder.addMatcher(
      githubApi.endpoints.fetchRepoPulls.matchFulfilled,
      (state) => {
        if (state.loading) {
          state.loading = false;
        }
      }
    );
    builder.addMatcher(
      githubApi.endpoints.fetchRepoPulls.matchRejected,
      (state) => {
        if (state.loading) {
          state.loading = false;
        }
      }
    );
  },
});

const selectGithub = (state: RootState) => state.github;
export const useGithubStore = () => {
  const github = useSelector(selectGithub);
  return useMemo(() => github, [github]);
};

export const { setGithubData } = githubSlice.actions;
export default githubSlice.reducer;
