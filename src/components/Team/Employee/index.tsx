"use client";
import Progress from "@/components/Shared/Progress";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Employee = (props: any) => {
  const { Email, Name, Role, Score, Data } = props;

  return (
    <Link
      className="bg-white w-[260px] rounded-2xl mb-[30px]"
      href={`team/${Data?.["User id"]}`}
    >
      <div className="p-6 ">
        <div className="m-auto text-center">
          <Image
            src={"/assets/png/avatar.png"}
            width={105}
            height={105}
            alt="avatar"
            className="m-auto rounded-lg"
          />
        </div>
        <div className="mt-4 flex flex-col gap-[10px] items-center">
          <Typography variant="h6" className=" text-primary">
            {Name}
          </Typography>
          <Typography variant="body2" className="text-black">
            {Email}
          </Typography>
        </div>

        <div className=" flex gap-2 pt-6 px-6 items-center">
          <div className="flex-1">
            <Progress
              height={6}
              value={Score}
              barcolor="YELLOW"
              trackcolor="WHITE_PURPLE"
            />
          </div>
          <Typography variant="h6" className="text-black">
            {Score}%
          </Typography>
        </div>
      </div>
      <div className="h-[3px] w-full bg-whitePurple shadow-lightShadow" />
      <div className="p-6 pt-4 text-center">
        <Typography variant="h6" className=" text-primary">
          {Role}
        </Typography>
      </div>
    </Link>
  );
};

export default Employee;
