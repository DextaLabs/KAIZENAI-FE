"use client";
import { Role } from "@/components/Shared/Types/user";
import axios from "axios";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAppDispatch } from "../store";
import { setAuthData, useAuthStore } from "../store/authentication";
import { useLazyGetUsersMeQuery } from "../store/authentication/api";
import { setAuthorizationHeader } from "../utils/axiosInstance";

const WithAuth = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const params = useParams();
  const dispatch = useAppDispatch();
  const { authenticated, token } = useAuthStore();

  const handleIsManagerOnlyRoute = () => {
    const paths = ["/team"];
    if (params!.employeeId) {
      paths.push(path!);
    }

    return paths;
  };

  setAuthorizationHeader(token);

  const router = useRouter();
  const [getMeDetail] = useLazyGetUsersMeQuery();

  const getToken = async () => {
    try {
      const res = await axios.get(`/api/getToken?${Date.now()}`);
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

      if (
        (res.data["User Detail"].role === Role.DEVELOPER &&
          handleIsManagerOnlyRoute().includes(path!)) ||
        path === "/auth/login"
      ) {
        router.replace("/");
      }
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
