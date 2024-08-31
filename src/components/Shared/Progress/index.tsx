import { ThemeColor } from "../../../provider/theme";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(
  ({
    barcolor,
    trackcolor,
    height,
  }: {
    barcolor: keyof typeof ThemeColor;
    trackcolor: keyof typeof ThemeColor;
    height: number;
  }) => ({
    height: height,
    borderRadius: height,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: ThemeColor[trackcolor],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: height,
      backgroundColor: ThemeColor[barcolor],
      animation: "widthAnimation 0.5s linear ",
    },
    "@keyframes widthAnimation": {
      from: { width: "0%" },
      to: { width: "100%" },
    },
  })
);

type propType = {
  value: number;
  barcolor?: keyof typeof ThemeColor;
  trackcolor?: keyof typeof ThemeColor;
  height?: number;
};

const Progress = (props: propType) => {
  const {
    value,
    barcolor = "YELLOW",
    trackcolor = "WHITE",
    height = 10,
  } = props;

  return (
    <BorderLinearProgress
      barcolor={barcolor}
      trackcolor={trackcolor}
      variant="determinate"
      height={height}
      value={value}
    />
  );
};

export default Progress;
