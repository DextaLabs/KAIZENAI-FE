import { RoleData } from "@/app/utils/constant";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type propType = RoleData[0] & { title: string };

const Header = (props: propType) => {
  const { firstName, email, lastName, image, title } = props;
  return (
    <header className="flex justify-between items-end pb-[20px]">
      <Typography variant="h2" className="text-darkPurple">
        {title}
      </Typography>
      <div className="flex gap-[10px] items-center">
        <div>
          <Typography variant="h6" className="text-right text-primary">
            {firstName} {lastName}
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
      </div>
    </header>
  );
};

export default Header;
