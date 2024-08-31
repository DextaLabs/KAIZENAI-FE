import { THRESHOLD } from "../../../library/utils/enums";
import { Typography } from "@mui/material";

const ThresholdWaring = () => {
  return (
    <Typography variant="caption" className="text-pink absolute bottom-0">
      *Minimum Performance Benchmark: {THRESHOLD.REQUIRED}%
    </Typography>
  );
};

export default ThresholdWaring;
