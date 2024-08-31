// src/components/Sidebar.js

import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
// import PersonIcon from "@mui/icons-material/Person";
import RadarIcon from "@mui/icons-material/Radar";
import { Divider } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link, useLocation } from "react-router-dom";
import { useUserStore } from "../../pages/dashboard/store";

const Sidebar = () => {
  const { users } = useUserStore();
  const location = useLocation();

  const getLinkClasses = (path: any) => {
    const isActive = location.pathname === path;
    return `
      flex items-center p-4 rounded-l-lg
      ${
        isActive
          ? "bg-gradient-to-r from-purple-700 to-purple-500 text-white font-bold"
          : "text-white"
      }
      ${isActive ? "border-r-4 border-white" : ""}
    `;
  };
  return (
    <div className="bg-[#6839A7] text-white min-h-screen">
      {/* User Profile Section */}
      <div className="flex flex-col items-center py-10 gap-3">
        <img
          src={users?.user?.profile?.profile_picture}
          alt="avatar"
          width={260}
          height={260}
          className="rounded-2xl w-40 h-40"
        />
        <h2 className="text-xl font-bold">
          {users?.user.first_name} {users?.user.last_name}
        </h2>
        <p className="text-gray-400">{users?.user.role}</p>
        <div className="py-3 w-[80%]">
          <div className="mt-4 flex items-center justify-between">
            <span className="text-white text-lg">740/1000</span>
            <p className="bg-yellow-500 text-white text-lg rounded-full px-2 mt-2">
              {users?.level}
            </p>
          </div>
          <div>
            <ProgressBar
              completed={users?.level ?? 0}
              bgColor="#FFBF15"
              baseBgColor="#fff"
            />
          </div>
          <div className="flex items-center mt-4 gap-2">
            <img
              src="/assets/png/awards.png"
              alt="awards"
              width={30}
              height={30}
            />
            <span className="text-md self-end">35 Awards</span>
          </div>
        </div>
      </div>
      <Divider className="bg-white" />
      {/* Navigation Links */}
      <div className="bg-purple-900 text-white min-h-screen">
        <nav className="space-y-4 mt-5">
          <Link to="/home" className={getLinkClasses("/home")}>
            <DashboardIcon className="mr-3" />
            <span>My Dashboard</span>
          </Link>
          {(users?.user.role === "owner" || users?.user.role === "manager") && (
            <Link to="/myTeams" className={getLinkClasses("/myTeams")}>
              <GroupIcon className="mr-3" />
              <span>My Team</span>
            </Link>
          )}
          {/* {(users?.user.role === "owner" ||
            users?.user.role === "manager") && (
            <Link to="/users" className={getLinkClasses("/user")}>
              <PersonIcon className="mr-3" />
              <span>Users</span>
            </Link>
          )} */}
          <Link to="/meeting" className={getLinkClasses("/meeting")}>
            <RadarIcon className="mr-3" />
            <span>Meetings</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
