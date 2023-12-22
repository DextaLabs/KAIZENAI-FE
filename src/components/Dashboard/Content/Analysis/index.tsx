import ThresholdWaring from "@/components/Shared/ThresholdWaring";
import Line from "@/components/Shared/charts/Line";
import Radar from "@/components/Shared/charts/Radar";
import { Typography } from "@mui/material";
import React from "react";

const Analysis = () => {
  return (
    <>
      <div className="relative row-span-4 bg-halfWhite rounded-[16px] p-6">
        <Typography variant="subtitle1" className="text-darkPurple">
          Clarity of Expression
        </Typography>
        <div className="h-[420px] w-full">
          <Radar />
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
