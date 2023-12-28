"use client";
import { useAppDispatch } from "@/app/store";
import { setGithubData, useGithubStore } from "@/app/store/github";
import {
  useLazyFetchRepoCommitsQuery,
  useLazyFetchRepoContributionQuery,
  useLazyFetchRepoDetailQuery,
  useLazyFetchRepoPullsQuery,
  useLazyFetchReposQuery,
} from "@/app/store/github/api";
import Button from "@/components/Shared/Button";
import Forms from "@/components/Shared/Forms";
import Input from "@/components/Shared/Input";
import Select from "@/components/Shared/Select";
import { FormPropType } from "@/components/Shared/Types/formPropType";
import { FormikValues } from "formik";
import { useEffect, useRef } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  token: Yup.string().required("Please enter github token"),
});

const TokenForm = (props: FormPropType) => {
  const { handleChange, values, isSubmitting, handleBlur } = props;

  return (
    <div className="flex gap-4">
      <Input
        type="text"
        name="token"
        placeholder="Token"
        className="max-w-[500px]"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.token}
      />

      <Button
        type="submit"
        className="bg-purple hover:bg-purple"
        disabled={isSubmitting}
        isSubmitting={isSubmitting}
      >
        Get Repos
      </Button>
    </div>
  );
};

const Repos = () => {
  const { repos, selectedRepo } = useGithubStore();
  const token = useRef<string>("");
  const dispatch = useAppDispatch();
  const [getRepo] = useLazyFetchReposQuery();
  const [getRepoDetail] = useLazyFetchRepoDetailQuery();
  const [getContribution] = useLazyFetchRepoContributionQuery();
  const [getCommits] = useLazyFetchRepoCommitsQuery();
  const [getPull] = useLazyFetchRepoPullsQuery();

  const handleGetRepos = async (values: FormikValues) => {
    dispatch(setGithubData({ repos: [], selectedRepo: undefined }));
    token.current = values.token;
    const res = await getRepo({ token: values.token });
    if (res.isSuccess) {
      dispatch(setGithubData({ repos: res.data }));
    }
  };

  const handleGetRepoDetail = async () => {
    const [detail, contribution, commits, pull] = await Promise.all([
      getRepoDetail({ repo: selectedRepo!, token: token.current }),
      getContribution({ repo: selectedRepo!, token: token.current }),
      getCommits({ repo: selectedRepo!, token: token.current }),
      getPull({ repo: selectedRepo!, token: token.current }),
    ]);

    if (detail.isSuccess) {
      dispatch(setGithubData({ repoDetail: detail.data }));
    }
    if (contribution.isSuccess) {
      dispatch(setGithubData({ contribution: contribution.data }));
    }
    if (commits.isSuccess) {
      dispatch(setGithubData({ commits: commits.data }));
    }
    if (pull.isSuccess) {
      dispatch(setGithubData({ pullRequests: pull.data }));
    }
  };

  useEffect(() => {
    if (selectedRepo) {
      handleGetRepoDetail();
    }
  }, [selectedRepo]);

  return (
    <div className="mt-[30px]">
      <Forms
        initialValue={{ token: "" }}
        validate={validationSchema}
        onSubmit={async values => {
          await handleGetRepos(values);
        }}
      >
        <TokenForm {...({} as FormPropType)} />
      </Forms>

      <div className="mt-[30px] max-w-[500px]">
        <Select
          options={repos.map(i => ({ value: i.RepoName, label: i.RepoName }))}
          placeholder="Select Repository"
          disabled={repos.length === 0}
          value={selectedRepo}
          onChange={(_, selectedValue) => {
            dispatch(setGithubData({ selectedRepo: selectedValue as string }));
          }}
        />
      </div>
    </div>
  );
};

export default Repos;
