"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { useAppDispatch } from "../store";
import { setAuthData, useAuthStore } from "../store/authentication";
import { useLazyGetUsersMeQuery } from "../store/authentication/api";
import { useRouter } from "next/navigation";

const WithAuth = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const { authenticated } = useAuthStore();

  const router = useRouter();
  const [getMeDetail] = useLazyGetUsersMeQuery();

  const getToken = async () => {
    try {
      const res = await axios.get("/api/getToken");
      const token = res.data.token as string;
      if (token) {
        dispatch(setAuthData({ token: token, authenticated: true }));
      } else {
        throw new Error("Token not found");
      }
    } catch (err) {
      dispatch(setAuthData({ authCheck: true }));
      router.replace("/auth/login");
    }
  };

  const handleGetMineDetail = async () => {
    const res = await getMeDetail({});
    if (res.data) {
      dispatch(setAuthData({ profile: res.data, authCheck: true }));
      router.replace("/");
    } else {
      dispatch(
        setAuthData({ authenticated: false, token: "", authCheck: true })
      );
      router.replace("/auth/login");
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    if (authenticated) {
      handleGetMineDetail();
    }
  }, [authenticated]);

  return <>{children}</>;
};

export default WithAuth;
