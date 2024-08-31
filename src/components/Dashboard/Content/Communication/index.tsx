import { Typography } from "@mui/material";
import { ThemeColor } from "../../../../provider/theme";
import RadialChart from "../../../Shared/charts/Radial";
import { labelValue } from "../../../../library/utils/classes";
import { UserData, useUserStore } from "../../../../pages/dashboard/store";
import { useMemo } from "react";

interface CommunicationProp {
  other?: boolean;
}

const Communication = ({ other }: CommunicationProp) => {
  // const { profileDetail } = useAuthStore();
  const { users, others } = useUserStore();

  const currentUser: UserData | null = useMemo(() => {
    if (other) return others;
    else {
      return users;
    }
  }, [other, others, users]);

  const overview = [
    {
      label: "Clarification",
      value: currentUser?.clarification,
      color: ThemeColor.PURPLE,
      tailwind: "text-purple",
    },
    {
      label: "Honesty",
      value: currentUser?.honesty,
      color: ThemeColor.PINK,
      tailwind: "text-pink",
    },
    {
      label: "Engagement",
      value: currentUser?.engagement_in_conversation,
      color: ThemeColor.GREEN,
      tailwind: "text-green",
    },
    {
      label: "Listening",
      value: currentUser?.listening,
      color: ThemeColor.PURPLE_NAV,
      tailwind: "text-purpleNav",
    },
  ];

  return (
    <div className="relative flex h-[180px] pl-[65px]  gap-[40px] w-full rounded-[16px] bg-halfWhite mt-[30px] items-center">
      <div className="w-[180px] h-full">
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
                size: "5%",
              },
            },
          }}
        />
      </div>
      <div className="flex  flex-1 justify-around gap-5">
        {overview.map((i) => (
          <div key={i.label} className={labelValue}>
            <Typography variant="body1" className="text-black">
              {i.label}
            </Typography>
            <Typography variant="h1" className={i.tailwind}>
              {i.value}%
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Communication;
