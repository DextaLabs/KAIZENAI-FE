import Line from "@/components/Shared/charts/Line";
import Radar from "@/components/Shared/charts/Radar";
import Icon from "@/components/Shared/Icon";
import { labelValue } from "@/library/utils/classes";
import {
  COMMUNICATION_SCORE,
  COMMUNICATION_SCORE_LABEL,
  THRESHOLD,
} from "@/library/utils/enums";
import { ThemeColor } from "@/provider/theme";
import { Typography } from "@mui/material";

const Communication = (props: any) => {
  const { employeeDetail } = props;

  const data = [
    employeeDetail?.["Technical Articulation"] ?? 0,
    employeeDetail?.["Leadership Presence"] ?? 0,
    employeeDetail?.Communication ?? 0,
    employeeDetail?.["Innovative thinking"] ?? 0,
    employeeDetail?.["Cultural fluency"] ?? 0,
  ];

  return (
    <div className="mt-[30px] grid gap-[30px] grid-rows-[repeat(4,100px)] grid-cols-2">
      <div className="flex gap-[30px]">
        {Object.values(COMMUNICATION_SCORE).map(i => (
          <div
            key={i}
            className="flex-1 flex relative bg-halfWhite rounded-[16px] gap-4 p-6"
          >
            <div className="h-[54px]">
              <Icon
                name={i === "Listening" ? "listening" : "resolution"}
                className="h-full w-full"
              />
            </div>
            <div className={labelValue}>
              <Typography variant="subtitle1" className="text-lightPurple">
                {COMMUNICATION_SCORE_LABEL[i]}
              </Typography>
              <Typography variant="h3" className="text-darkPurple">
                {employeeDetail[i]}%
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
                    callback: (label, index) => {
                      return [label, `${data[index]}%`];
                    },
                    // @ts-ignore
                    color: data.map(i =>
                      i > THRESHOLD.REQUIRED
                        ? ThemeColor.LIGHT_PURPLE
                        : ThemeColor.LIGHT_PURPLE
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
