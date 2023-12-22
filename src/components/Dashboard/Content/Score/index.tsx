import { labelValue } from "@/app/utils/classes";
import ThresholdWaring from "@/components/Shared/ThresholdWaring";
import { Typography } from "@mui/material";
import React from "react";

const Score = () => {
  const score = [
    {
      label: "Listening Ability",
      value: "57%",
    },
    {
      label: "Issue Resolution",
      value: "57%",
    },
  ];

  return (
    <div className="flex gap-[30px]">
      {score.map(i => (
        <div
          key={i.label}
          className="relative flex-1 bg-halfWhite rounded-[16px] p-6"
        >
          <div className={labelValue}>
            <Typography variant="subtitle1" className="text-lightPurple">
              {i.label}
            </Typography>
            <Typography variant="h3" className="text-darkPurple">
              {i.value}
            </Typography>
          </div>
          <ThresholdWaring />
        </div>
      ))}
    </div>
  );
};

export default Score;
