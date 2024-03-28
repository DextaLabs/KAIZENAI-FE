import Icon from "@/components/Shared/Icon";
import { labelValue } from "@/library/utils/classes";
import { Typography } from "@mui/material";

const Awards = (props: any) => {
  const { Data } = props;
  const awards = [
    { icon: "award", title: "Awards", value: Data?.Awards ?? 0 },
    {
      title: "Level",
      value: Data?.Level,
      icon: "level",
    },
    {
      title: "Communication",
      value: Data?.Communication,
      icon: "integration",
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
