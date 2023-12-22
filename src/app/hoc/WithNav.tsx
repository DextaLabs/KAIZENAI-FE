"use client";
import React from "react";
import Navigator from "@/components/Navbar";
import { useAuthStore } from "../store/authentication";
import { usePathname } from "next/navigation";
import { HIDE_NAV_ON } from "../utils/constant";
import { CircularProgress } from "@mui/material";
import { ThemeColor } from "../theme";

const WithNav = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const { authenticated, authCheck } = useAuthStore();

  return !authCheck ? (
    <div className="h-[100dvh] w-full flex justify-center items-center">
      <CircularProgress sx={{ color: ThemeColor.PURPLE }} />
    </div>
  ) : (
    <>
      {authenticated && !HIDE_NAV_ON.includes(path!) ? <Navigator /> : null}
      <div className="flex-1">{children}</div>
    </>
  );
};

export default WithNav;
