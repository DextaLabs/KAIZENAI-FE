export type ReposType = {
  RepoName: string;
  RepoDescription?: string | null;
  RepoUrl: string;
  Visibility: string;
  RepoIssues: number;
  RepoCommits: number;
  RepoPulls: number;
  RepoForks: number;
}[];

export type BranchesInfoEntity = {
  name: string;
  commit: Commit;
  protected: boolean;
};
export type Commit = {
  sha: string;
  url: string;
};

export type RepoDetailType = {
  RepoName: string;
  Contributors?: string[] | null;
  BranchesInfo?: BranchesInfoEntity[] | null;
  Languages?: string[] | null;
  ContributorsUrl: string;
  IssuesUrl: string;
  CommitsUrl: string;
  PullsUrl: string;
};

export type RepoContributionType = {
  Name: string;
  Contributions: number;
}[];

export type RepoCommitsType = {
  "Commit Description": string;
  Author: string;
  Committer: string;
  "Commit Code": string;
}[];

export type RepoPullsType = {
  "Patch URL": string;
  "Diff URL": string;
  "Pull Requests": number;
  Description: string;
  Body?: null | string;
};
