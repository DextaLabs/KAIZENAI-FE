"use client";
import Icon from "@/components/Shared/Icon";
import { useTeamStore } from "@/provider/store/teams";
import { Popover, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type propType = { email: string; name: string; title: string; image: string };

const Header = (props: propType) => {
  const { teamMember } = useTeamStore();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { image, title, email, name } = props;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <header className="flex justify-between items-end pb-[20px]">
      <Typography variant="h2" className="text-darkPurple capitalize">
        {title}
      </Typography>
      <button
        className="flex gap-[10px] cursor-pointer items-center"
        aria-describedby={id}
        onClick={handleClick}
      >
        <div>
          <Typography
            variant="h6"
            className="capitalize text-right text-primary"
          >
            {name}
          </Typography>
          <Typography variant="body2" className="text-black">
            {email}
          </Typography>
        </div>
        <Image
          src={image}
          height={44}
          width={44}
          alt="Avatar"
          className="rounded-lg"
        />
        <Icon name="chevron" />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Typography sx={{ p: 1 }}>
          <div className="flex flex-col gap-2 text-sm">
            {teamMember?.map(i => {
              const { Name, Data } = i;

              return (
                <Link
                  key={`${Data?.["User id"]}`}
                  href={`/team/${Data?.["User id"]}`}
                  className="capitalize flex items-center justify-start gap-2"
                >
                  <Image
                    src={"/assets/png/avatar.png"}
                    width={36}
                    height={36}
                    alt="avatar"
                    className="rounded-lg"
                  />
                  {Name}
                </Link>
              );
            })}
          </div>
        </Typography>
      </Popover>
    </header>
  );
};

export default Header;
