import Line from "@/components/Shared/charts/Line";
import Radar from "@/components/Shared/charts/Radar";
import { THRESHOLD } from "@/library/utils/enums";
import { useAuthStore } from "@/provider/store/authentication";
import { ThemeColor } from "@/provider/theme";
import { Typography } from "@mui/material";

const Analysis = () => {
  const { profileDetail } = useAuthStore();
  const data = [
    profileDetail?.technical_articulation ?? 0,
    profileDetail?.leadership_presence ?? 0,
    profileDetail?.communication ?? 0,
    profileDetail?.innovative_thinking ?? 0,
    profileDetail?.cultural_fluency ?? 0,
  ];
  return (
    <>
      <div className="relative row-span-4 bg-halfWhite rounded-[16px] p-6">
        <Typography variant="subtitle1" className="text-darkPurple">
          Clarity of Expression
        </Typography>
        <div className="h-[420px] w-full">
          {profileDetail ? (
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
          ) : null}
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
