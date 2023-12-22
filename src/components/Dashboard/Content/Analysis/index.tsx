import { ThemeColor } from "@/app/theme";
import { THRESHOLD } from "@/app/utils/enums";
import ThresholdWaring from "@/components/Shared/ThresholdWaring";
import Line from "@/components/Shared/charts/Line";
import Radar from "@/components/Shared/charts/Radar";
import { Typography } from "@mui/material";
import React from "react";

const Analysis = () => {
  const data = [20, 40, 60, 80, 100];
  return (
    <>
      <div className="relative row-span-4 bg-halfWhite rounded-[16px] p-6">
        <Typography variant="subtitle1" className="text-darkPurple">
          Clarity of Expression
        </Typography>
        <div className="h-[420px] w-full">
          <Radar
            options={{
              scales: {
                r: {
                  grid: {
                    color: [ThemeColor.GRID],
                    lineWidth: 3,
                  },
                  ticks: {
                    color: "transparent",
                    backdropColor: "transparent",
                    stepSize: 20,

                    maxTicksLimit: 100,
                  },
                  angleLines: {
                    color: "transparent",
                  },
                  pointLabels: {
                    callback: (label, index) => {
                      return [label, `${data[index]}%`];
                    },
                    // @ts-ignore
                    color: data.map(i =>
                      i > THRESHOLD.REQUIRED
                        ? ThemeColor.LIGHT_PURPLE
                        : ThemeColor.ERROR
                    ),
                    font: {
                      size: 15,
                      weight: 500,
                    },
                  },
                  min: 0,
                  max: 100,
                },
              },
            }}
            data={data}
          />
        </div>
        <ThresholdWaring />
      </div>
      <div className="relative row-span-3  bg-halfWhite rounded-[16px] p-6">
        <Typography variant="subtitle1" className="text-darkPurple">
          Problem Oriented vs Solution Oriented Ratio
        </Typography>
        <Line />
        <ThresholdWaring />
      </div>
    </>
  );
};

export default Analysis;
