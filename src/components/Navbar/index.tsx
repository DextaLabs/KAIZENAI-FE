"use client";
import { useAuthStore } from "@/provider/store/authentication";
import { activeRoute } from "@/library/utils/activeRoute";
import { Typography } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../Shared/Icon";
import Progress from "../Shared/Progress";
import { Role } from "../Shared/Types/user";

const ManagerNavItems = [
  {
    label: "My Dashboard",
    icon: "dashboard",
    path: "/",
    nested: false,
  },
  {
    label: "My Team",
    icon: "team",
    path: "/team",
    nested: true,
  },
  {
    label: "Missions",
    icon: "mission",
    path: "/mission",
    nested: false,
  },
];
const DeveloperNavItems = [
  {
    label: "My Dashboard",
    icon: "dashboard",
    path: "/",
    nested: false,
  },
  {
    label: "Missions",
    icon: "mission",
    path: "/mission",
    nested: false,
  },
];

const Navigator = () => {
  const { profile } = useAuthStore();
  const pathname = usePathname();

  const NavItems =
    profile["User Detail"].role === Role.DEVELOPER
      ? DeveloperNavItems
      : ManagerNavItems;

  const userDetail = profile["User Detail"];

  return (
    <nav className="h-[100dvh] sticky top-0  w-[260px] bg-purpleNav py-[80px]">
      <div className="m-auto text-center px-5">
        <Image
          src="/assets/png/avatar.png"
          width={120}
          height={120}
          alt="avatar"
          className="m-auto rounded-lg"
        />
      </div>

      <div className="mt-4 text-center  px-5">
        <Typography variant="h4" className="text-white">
          {`${userDetail.first_name} ${userDetail.last_name} `}
        </Typography>
        <Typography variant="h6" className="text-white">
          {userDetail.role}
        </Typography>
      </div>

      <div className="flex flex-col gap-[10px] px-5 mt-10">
        <div className="flex justify-between items-center">
          <Typography variant="h6" className="text-white">
            740/1000
          </Typography>
          <Typography variant="h6" className="text-white">
            Level 8
          </Typography>
        </div>
        <Progress value={50} />
        <div className="flex gap-[6px] items-end">
          <div className="w-[26px] h-[25px]">
            <Icon name="trophy" />
          </div>
          <Typography variant="h6" className="text-white">
            35 awards
          </Typography>
        </div>
      </div>

      <div className=" flex flex-col gap-1 mt-6 pt-6 border-t-2 border-white">
        {NavItems.map(i => {
          const active = activeRoute(i.path, pathname!, i.nested);
          return (
            <Link
              key={i.label}
              href={i.path}
              className={classNames("py-4 px-5", {
                ["border-r-2 border-white bg-purple-gradient"]: active,
              })}
            >
              <div className="flex gap-2 items-center">
                <div className="w-[26px] text-center">
                  <Icon name={i.icon} className="m-auto" />
                </div>
                <Typography variant="subtitle1" className="text-white">
                  {i.label}
                </Typography>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigator;
