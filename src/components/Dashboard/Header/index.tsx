"use client";
import { useAppDispatch } from "@/app/store";
import {
  resetAuthData,
  setAuthData,
  useAuthStore,
} from "@/app/store/authentication";
import { RoleData } from "@/app/utils/constant";
import { Popover, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type propType = RoleData[0];

const Header = (props: propType) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { profile } = useAuthStore();
  const userDetail = profile["User Detail"];

  const { email, first_name, last_name } = userDetail;

  const { image } = props;

  const handleLogout = async () => {
    try {
      await axios.get(`/api/removeToken?${Date.now()}`);
      dispatch(resetAuthData());
      dispatch(setAuthData({ authCheck: true }));
      router.replace(`/auth/login`);
    } catch (err) {}
  };

  return (
    <header className="flex justify-between items-end pb-[20px]">
      <Typography variant="h2" className="text-darkPurple">
        {`Hi, ${first_name}!`}
      </Typography>
      <div className="flex gap-[10px] items-center">
        <div>
          <Typography variant="h6" className="text-right text-primary">
            {first_name} {last_name}
          </Typography>
          <Typography variant="body2" className="text-black">
            {email}
          </Typography>
        </div>
        <button aria-describedby={id} onClick={handleClick}>
          <Image
            src={image}
            height={44}
            width={44}
            alt="Avatar"
            className="rounded-lg"
          />
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
          <button className="p-2" onClick={() => handleLogout()}>
            Logout
          </button>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
