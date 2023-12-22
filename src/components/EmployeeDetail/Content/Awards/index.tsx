import { labelValue } from "@/app/utils/classes";
import { Typography } from "@mui/material";
import React from "react";

const Awards = () => {
  const awards = [
    {
      title: "Awards",
      value: "Silver",
    },
    {
      title: "Level",
      value: "8",
    },
    {
      title: "Mission",
      value: "34",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-[30px]  h-full">
      {awards.map(i => (
        <div className="bg-halfWhite rounded-[16px] p-6" key={i.title}>
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
