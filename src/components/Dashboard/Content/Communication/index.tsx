import { ThemeColor } from "@/app/theme";
import { labelValue } from "@/app/utils/classes";
import ThresholdWaring from "@/components/Shared/ThresholdWaring";
import RadialChart from "@/components/Shared/charts/Radial";
import { Typography } from "@mui/material";
import React from "react";

const Communication = () => {
  const overview = [
    {
      label: "Language Proficiency",
      value: 87,
      color: ThemeColor.PURPLE,
      tailwind: "text-purple",
    },
    {
      label: "Cultural Harmony",
      value: 64,
      color: ThemeColor.PINK,
      tailwind: "text-pink",
    },
    {
      label: "Collaboration",
      value: 45,
      color: ThemeColor.GREEN,
      tailwind: "text-green",
    },
  ];

  return (
    <div className="relative flex h-[180px] pl-[65px]  gap-[40px] w-full rounded-[16px] bg-halfWhite mt-[30px] items-center">
      <div className="w-[180px] h-full">
        <RadialChart
          chartKey="overview"
          config={{
            series: overview.map(i => i.value),
            colors: overview.map(i => i.color),
            labels: overview.map(i => i.label),
          }}
          plotOptions={{
            radialBar: {
              hollow: {
                size: "15%",
              },
            },
          }}
        />
      </div>
      <div className="flex  flex-1 justify-around gap-5">
        {overview.map(i => (
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
      <ThresholdWaring />
    </div>
  );
};

export default Communication;
