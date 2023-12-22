import { ThemeColor } from "@/app/theme";
import { labelValue } from "@/app/utils/classes";
import { RoleData } from "@/app/utils/constant";
import {
  COMMUNICATION_SCORE_LABEL,
  COMMUNICATION_SCORE,
  THRESHOLD,
} from "@/app/utils/enums";
import Line from "@/components/Shared/charts/Line";
import Radar from "@/components/Shared/charts/Radar";
import { Typography } from "@mui/material";
import React from "react";

const Communication = (props: RoleData[0]) => {
  const { communicationScore } = props;
  const data = [20, 40, 60, 80, 100];

  return (
    <div className="mt-[30px] grid gap-[30px] grid-rows-[repeat(4,100px)] grid-cols-2">
      <div className="flex gap-[30px]">
        {Object.values(COMMUNICATION_SCORE).map(i => (
          <div key={i} className="flex-1 bg-halfWhite rounded-[16px] p-6">
            <div className={labelValue}>
              <Typography variant="subtitle1" className="text-lightPurple">
                {COMMUNICATION_SCORE_LABEL[i]}
              </Typography>
              <Typography variant="h3" className="text-darkPurple">
                {communicationScore[i]}%
              </Typography>
            </div>
          </div>
        ))}
      </div>

      <div className="row-span-4 bg-halfWhite rounded-[16px] p-6">
        <Typography variant="subtitle1" className="text-darkPurple">
          Clarity of Expression
        </Typography>
        <div className="w-full h-[420px]">
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
      </div>
      <div className="row-span-3  bg-halfWhite rounded-[16px] p-6">
        <Typography variant="subtitle1" className="text-darkPurple">
          Problem Oriented vs Solution Oriented Ratio
        </Typography>
        <Line />
      </div>
    </div>
  );
};

export default Communication;
