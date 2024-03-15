"use client";
import Navigator from "@/components/Navbar";
import { HIDE_NAV_ON } from "@/library/utils/constant";
import { ThemeColor } from "@/provider/theme";
import { CircularProgress } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";
import { useAuthStore } from "./../store/authentication";

const WithNav = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const { authenticated, authCheck } = useAuthStore();

  return !authCheck ? (
    <div className="h-[100dvh] w-full flex justify-center items-center">
      <CircularProgress sx={{ color: ThemeColor.PURPLE }} />
    </div>
  ) : (
    <>
      {!authenticated && !["/auth/login"].includes(path!) ? (
        <div className="h-[100dvh] w-full flex justify-center items-center">
          <CircularProgress sx={{ color: ThemeColor.PURPLE }} />
        </div>
      ) : (
        <>
          {authenticated && !HIDE_NAV_ON.includes(path!) ? <Navigator /> : null}
          <div className="flex-1">{children}</div>
        </>
      )}
    </>
  );
};

export default WithNav;
