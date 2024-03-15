import {
  RepoCommitsType,
  RepoContributionType,
  RepoDetailType,
  RepoPullsType,
  ReposType,
} from "@/components/Shared/Types/github";
import { prepareHeaders } from "@/library/utils/tokenManager";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL_VAIBHAV,
    prepareHeaders,
  }),
  tagTypes: ["github"],
  refetchOnMountOrArgChange: true,
  endpoints: builder => ({
    fetchRepos: builder.query({
      query: ({ token }: { token: string }) => ({
        url: `/repos?token=${token}`,
        method: "GET",
      }),
      transformResponse: (response: ReposType) => {
        if (response) {
          return response;
        }
        return [] as ReposType;
      },
    }),
    fetchRepoDetail: builder.query({
      query: ({ token, repo }: { token: string; repo: string }) => ({
        url: `/repo/${repo}?token=${token}`,
        method: "GET",
      }),
      transformResponse: (response: RepoDetailType) => {
        if (response) {
          return response;
        }
        return {} as RepoDetailType;
      },
    }),
    fetchRepoContribution: builder.query({
      query: ({ token, repo }: { token: string; repo: string }) => ({
        url: `/repo/${repo}/contributors_url?token=${token}`,
        method: "GET",
      }),
      transformResponse: (response: RepoContributionType) => {
        if (response) {
          return response;
        }
        return [] as RepoContributionType;
      },
    }),
    fetchRepoCommits: builder.query({
      query: ({ token, repo }: { token: string; repo: string }) => ({
        url: `/repo/${repo}/commits?token=${token}`,
        method: "GET",
      }),
      transformResponse: (response: RepoCommitsType) => {
        if (response) {
          return response;
        }
        return [] as RepoCommitsType;
      },
    }),
    fetchRepoPulls: builder.query({
      query: ({ token, repo }: { token: string; repo: string }) => ({
        url: `/repo/${repo}/pulls?token=${token}`,
        method: "GET",
      }),
      transformResponse: (response: RepoPullsType) => {
        if (response) {
          return response;
        }
        return {} as RepoPullsType;
      },
    }),
  }),
});

export const {
  useFetchReposQuery,
  useFetchRepoDetailQuery,
  useFetchRepoContributionQuery,
  useFetchRepoCommitsQuery,
  useFetchRepoPullsQuery,
  useLazyFetchReposQuery,
  useLazyFetchRepoDetailQuery,
  useLazyFetchRepoContributionQuery,
  useLazyFetchRepoCommitsQuery,
  useLazyFetchRepoPullsQuery,
} = githubApi;
