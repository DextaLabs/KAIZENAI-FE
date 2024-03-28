import Icon from "@/components/Shared/Icon";
import { labelValue } from "@/library/utils/classes";
import { useAuthStore } from "@/provider/store/authentication";
import { Typography } from "@mui/material";

const Awards = () => {
  const { profileDetail } = useAuthStore();

  const awards = [
    {
      icon: "award",
      title: "Awards",
      value: profileDetail?.awards ?? "-",
    },
    {
      icon: "level",
      title: "Level",
      value: profileDetail?.level ?? "-",
    },
    {
      icon: "integration",
      title: "Integration",
      value: profileDetail?.integration ?? "-",
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
