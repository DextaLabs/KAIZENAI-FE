import { labelValue } from "@/library/utils/classes";
import Icon from "@/components/Shared/Icon";
import ThresholdWaring from "@/components/Shared/ThresholdWaring";
import { Typography } from "@mui/material";

const Score = () => {
  const score = [
    {
      label: "Listening Ability",
      value: "57%",
      icon: "listening",
    },
    {
      label: "Issue Resolution",
      value: "57%",
      icon: "resolution",
    },
  ];

  return (
    <div className="flex gap-[30px]">
      {score.map(i => (
        <div
          key={i.label}
          className="flex relative flex-1 bg-halfWhite rounded-[16px] p-6 gap-4"
        >
          <div className="h-[54px]">
            <Icon name={i.icon} className="h-full w-full" />
          </div>
          <div>
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
        </div>
      ))}
    </div>
  );
};

export default Score;
