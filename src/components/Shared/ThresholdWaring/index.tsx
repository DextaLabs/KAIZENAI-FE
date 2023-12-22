import { THRESHOLD } from "@/app/utils/enums";
import { Typography } from "@mui/material";
import React from "react";

const ThresholdWaring = () => {
  return (
    <Typography
      variant="caption"
      className="text-lightPurple absolute bottom-0"
    >
      *Minimum Performance Benchmark: {THRESHOLD.REQUIRED}%
    </Typography>
  );
};

export default ThresholdWaring;
