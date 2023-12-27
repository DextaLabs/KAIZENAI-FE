"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import { BadgesType } from "..";

const Badge = ({ Badges }: { Badges: BadgesType }) => {
  return (
    <div className="flex flex-wrap gap-x-[30px] justify-between">
      {Badges.map((i, index) => (
        <div
          className="relative bg-white w-[260px] rounded-2xl mb-[30px]"
          key={index}
        >
          {i.achieved ? null : (
            <div
              className="absolute inset-0 rounded-2xl "
              style={{
                background: "lightgray -0.111px -53px / 390.811% 283.152%",
                opacity: 0.6,
              }}
            />
          )}
          <div className="p-6 ">
            <div className="m-auto text-center">
              <Image
                src={i.images}
                width={180}
                height={180}
                alt="avatar"
                className="m-auto rounded-lg"
              />
            </div>
            <div className="mt-4 flex flex-col gap-[10px] items-center">
              <Typography variant="h3" className=" text-darkPurple">
                {i.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "600",
                }}
                className="text-lightPurple text-center"
              >
                {i.description}
              </Typography>
            </div>
          </div>
        </div>
      ))}
      <div className="w-[260px] " />
      <div className="w-[260px] " />
      <div className="w-[260px] " />
      <div className="w-[260px] " />
    </div>
  );
};

export default Badge;
