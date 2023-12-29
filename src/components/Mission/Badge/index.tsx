"use client";
import { ThemeColor } from "@/app/theme";
import Modal from "@/components/Shared/Model";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { BadgesType } from "..";

const Badge = ({ Badges, level }: { Badges: BadgesType; level: number }) => {
  const [selectedBadge, setSelectedBadge] = useState({
    open: false,
    badge: {} as BadgesType[0],
  });

  const handleCloseBadge = () => {
    setSelectedBadge({
      open: false,
      badge: {} as BadgesType[0],
    });
  };
  const handleOpenBadge = (badge: BadgesType[0]) => {
    setSelectedBadge({
      open: true,
      badge: badge,
    });
  };

  return (
    <>
      <div className="flex flex-wrap gap-x-[30px] justify-between">
        {Badges.map((i, index) => (
          <button
            className="relative bg-white w-[260px] rounded-2xl mb-[30px]"
            onClick={() => {
              handleOpenBadge(i);
            }}
            key={index}
          >
            {i.achieved ? null : (
              <div
                className="absolute inset-0 rounded-2xl bg-darkPurple "
                style={{
                  opacity: 0.7,
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
          </button>
        ))}
        <div className="w-[260px] " />
        <div className="w-[260px] " />
        <div className="w-[260px] " />
        <div className="w-[260px] " />
      </div>
      <Modal
        style={{
          bgcolor: ThemeColor.WHITE,
          padding: "16px 64px",
        }}
        onClose={handleCloseBadge}
        open={selectedBadge.open}
      >
        <Typography variant="h2" className="text-darkPurple text-center">
          Level {level}
        </Typography>
        <div className="mt-2 m-auto text-center">
          <Image
            src={selectedBadge.badge.images}
            width={300}
            height={300}
            alt="avatar"
            className="m-auto rounded-lg"
          />
        </div>
        <div className="mt-4 mb-8 flex flex-col gap-[10px] items-center">
          <Typography variant="h3" className=" text-darkPurple">
            {selectedBadge.badge.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "600",
            }}
            className="text-lightPurple text-center"
          >
            {selectedBadge.badge.description}
          </Typography>
        </div>
      </Modal>
    </>
  );
};

export default Badge;
