import { Typography } from "@mui/material";
import Line from "../../../Shared/charts/Line";
import { ThemeColor } from "../../../../provider/theme";
import { THRESHOLD } from "../../../../library/utils/enums";
import Radar from "../../../Shared/charts/Radar";
import { useState } from "react";

const Analysis = () => {
  const data = [60, 70, 80, 50, 90]; // Example data
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="relative row-span-4 bg-halfWhite rounded-[16px] p-6">
        <Typography variant="subtitle1" className="text-darkPurple">
          Clarity of Expression
        </Typography>
        <div
          className="h-[420px] w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Radar
            labels={[
              "Technical Articulation",
              "Leadership Presence",
              "Communication",
              "Innovative thinking",
              "Cultural fluency ",
            ]}
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
                    callback: (label: string, index: number) => {
                      return [label, `${data[index]}%`];
                    },
                    color: data.some((i) => i > THRESHOLD.REQUIRED)
                      ? ThemeColor.LIGHT_PURPLE
                      : ThemeColor.LIGHT_PURPLE,
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
          {isHovered && (
            <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10 rounded-[16px]">
              <Typography variant="h6" className="text-darkPurple">
                Coming Soon
              </Typography>
              {/* Add additional content or component for the detailed view */}
            </div>
          )}
        </div>
      </div>
      <div className="relative row-span-3  bg-halfWhite rounded-[16px] p-6">
        <Typography variant="subtitle1" className="text-darkPurple">
          Problem Oriented vs Solution Oriented Ratio
        </Typography>
        <Line />
      </div>
    </>
  );
};

export default Analysis;
