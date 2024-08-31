import { Typography } from "@mui/material";
import Icon from "../../../Shared/Icon";
import { labelValue } from "../../../../library/utils/classes";
import { UserData, useUserStore } from "../../../../pages/dashboard/store";
import { useMemo } from "react";

interface OverviewProp {
  other?: boolean;
}

const Score = ({ other }: OverviewProp) => {
  const { users, others } = useUserStore();

  const currentUser: UserData | null = useMemo(() => {
    if (other) return others;
    else {
      return users;
    }
  }, [other, others, users]);

  const score = [
    {
      label: "Technical Articulations",
      value: currentUser?.listening,
      icon: "listening",
    },
    {
      label: "Issue Resolution",
      value: currentUser?.issue_resolution,
      icon: "resolution",
    },
  ];

  return (
    <div className="flex gap-[30px]">
      {score.map((i) => (
        <div
          key={i.label}
          className="flex relative flex-1 bg-halfWhite rounded-[16px] p-6 gap-4"
        >
          <div className="h-[54px]">
            <Icon name={i.icon} className="h-full w-full" />
          </div>
          <div>
            <div className={labelValue}>
              <Typography variant="subtitle1" className="text-lightPurple">
                {i.label}
              </Typography>
              <Typography variant="h3" className="text-darkPurple">
                {i.value}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Score;
