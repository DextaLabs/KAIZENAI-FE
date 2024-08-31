"use client";

import { Typography } from "@mui/material";
import { ThemeColor } from "../../../../provider/theme";
import Progress from "../../../Shared/Progress";

const Metrics = () => {
  const metrics: {
    label: string;
    value: number;
    color: keyof typeof ThemeColor;
  }[] = [
    {
      label: "Quality",
      value: 25,
      color: "PURPLE",
    },
    {
      label: "Complexity",
      value: 40,
      color: "GREEN",
    },
    {
      label: "Scalability",
      value: 70,
      color: "PINK",
    },
    {
      label: "Security",
      value: 30,
      color: "DARK_PURPLE",
    },
  ];

  return (
    <div className="grid grid-cols-6 gap-[30px] row-span-3">
      <div className="col-span-4 bg-halfWhite p-6 rounded-[16px]">
        <Typography variant="subtitle1" className="text-darkPurple">
          Code Metrics
        </Typography>

        <div className="flex flex-col gap-[50px] px-[60px] pt-[32px]">
          {metrics.map((i) => (
            <div className="grid grid-cols-6 gap-3 items-center" key={i.label}>
              <Typography variant="h6" className="text-lightPurple">
                {i.label}
              </Typography>
              <div className="col-span-4">
                <Progress
                  value={i.value}
                  barcolor={i.color}
                  trackcolor={"GRID"}
                />
              </div>
              <Typography variant="h6" className="text-lightPurple text-right">
                {i.value} %
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-2 bg-halfWhite p-6 rounded-[16px] bg-purple">
        <Typography variant="subtitle1" className="text-white">
          Recommended Actions
        </Typography>
      </div>
    </div>
  );
};

export default Metrics;
