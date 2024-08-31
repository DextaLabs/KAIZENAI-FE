"use client";

import { Typography } from "@mui/material";
import { differenceInCalendarMonths } from "date-fns";
import { labelValue } from "../../../../library/utils/classes";
import { UserData, useUserStore } from "../../../../pages/dashboard/store";
import { ThemeColor } from "../../../../provider/theme";
import RadialChart from "../../../Shared/charts/Radial";
import { useMemo } from "react";

interface OverviewProp {
  other?: boolean;
}

const Overview = ({ other }: OverviewProp) => {
  // const { profile } = useAuthStore();
  // const userDetail = profile["User Detail"];
  // const { first_name, last_name, department, role, country, hire_date } =
  //   userDetail;

  const duration = differenceInCalendarMonths(new Date(), new Date());
  const { users, others } = useUserStore();

  const currentUser: UserData | null = useMemo(() => {
    if (other) return others;
    else {
      return users;
    }
  }, [other, others, users]);

  const overview = [
    {
      label: "Level",
      value: currentUser?.level,
      color: ThemeColor.YELLOW,
      tailwind: "text-yellow",
    },
  ];

  return (
    <div className="flex row-span-3 bg-halfWhite gap-[40px] rounded-[16px] p-[24px] pl-[65px] items-center ">
      <div className="w-[300px] h-full">
        <RadialChart
          chartKey="overview"
          config={{
            series: overview.map((i) => (i.value ? i.value : 0)),
            colors: overview.map((i) => i.color),
            labels: overview.map((i) => i.label),
          }}
          plotOptions={{
            radialBar: {
              hollow: {
                size: "75%",
              },
            },
          }}
        />
      </div>
      <section className="flex flex-col flex-1 justify-between h-full py-10">
        <div className={labelValue}>
          <Typography variant="h1" className="text-darkPurple">
            {currentUser?.user.first_name} {currentUser?.user.last_name}
          </Typography>
          <Typography variant="body1" className="text-lightPurple">
            {currentUser?.user.role}
          </Typography>
          <Typography variant="body1" className="text-lightPurple font-bold">
            {"country"}
          </Typography>
          <Typography variant="body1" className="text-lightPurple font-bold">
            {duration} Months
          </Typography>
        </div>
      </section>
      <img
        src={currentUser?.user?.profile?.profile_picture}
        alt="avatar"
        width={260}
        height={260}
        className="rounded-2xl"
        style={{ aspectRatio: 1 }}
      />
    </div>
  );
};

export default Overview;
