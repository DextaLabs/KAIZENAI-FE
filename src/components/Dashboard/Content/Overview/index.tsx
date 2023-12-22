"use client";
import { ThemeColor } from "@/app/theme";
import { labelValue } from "@/app/utils/classes";
import RadialChart from "@/components/Shared/charts/Radial";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Overview = () => {
  const overview = [
    {
      label: "Level",
      value: 80,
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
            series: overview.map(i => i.value),
            colors: overview.map(i => i.color),
            labels: overview.map(i => i.label),
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
            Hassan Ahmed
          </Typography>
          <Typography variant="body1" className="text-lightPurple">
            Senior Manager | Development Department
          </Typography>
          <Typography variant="body1" className="text-lightPurple font-bold">
            Indian
          </Typography>
          <Typography variant="body1" className="text-lightPurple font-bold">
            6 Months
          </Typography>
        </div>
      </section>
      <Image
        src="/assets/png/avatar.png"
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
