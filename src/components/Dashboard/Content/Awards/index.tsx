import { labelValue } from "@/app/utils/classes";
import Icon from "@/components/Shared/Icon";
import { Typography } from "@mui/material";

const Awards = () => {
  const awards = [
    {
      icon: "award",
      title: "Awards",
      value: "Silver",
    },
    {
      icon: "level",
      title: "Level",
      value: "8",
    },
    {
      icon: "integration",
      title: "Integration",
      value: "34",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-[30px]  h-full">
      {awards.map(i => (
        <div
          className="flex items-center gap-3 bg-halfWhite rounded-[16px] p-6"
          key={i.title}
        >
          <div className="h-[55px]" style={{ aspectRatio: 1 }}>
            <Icon name={i.icon} className="h-full w-full" />
          </div>
          <div className={labelValue}>
            <Typography variant="subtitle1" className="text-lightPurple">
              {i.title}
            </Typography>
            <Typography variant="h3" className="text-darkPurple">
              {i.value}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Awards;
