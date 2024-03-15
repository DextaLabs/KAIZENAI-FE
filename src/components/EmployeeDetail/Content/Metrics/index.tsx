"use client";
import Progress from "@/components/Shared/Progress";
import { ThemeColor } from "@/provider/theme";
import { Typography } from "@mui/material";

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
    <div className="mt-[30px] grid gap-[30px]  grid-cols-6">
      <div className="col-span-4  bg-halfWhite p-6 rounded-[16px]">
        <Typography variant="subtitle1" className="text-darkPurple">
          Code Metrics
        </Typography>

        <div className="flex flex-col gap-[50px] px-[60px] pt-[32px]">
          {metrics.map(i => (
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
    </div>
  );
};

export default Metrics;
