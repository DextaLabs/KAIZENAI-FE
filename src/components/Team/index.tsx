"use client";
import { layoutSpacing } from "@/app/utils/classes";
import { Managers } from "@/app/utils/constant";
import { ROLES } from "@/app/utils/enums";
import { Typography } from "@mui/material";
import Employee from "./Employee";
import Header from "./Header";

const Team = () => {
  const mangers = Managers.filter(i => i.role === ROLES.MANAGER);
  const employee = Managers.filter(i => i.role === ROLES.EMPLOYEE);

  return (
    <div className={layoutSpacing}>
      <Header title="My Teams" {...Managers[0]} />

      <div className="flex flex-col gap-[18px]">
        <Typography variant="h3" className={"text-darkPurple"}>
          Mangers
        </Typography>
        <div className="flex flex-wrap gap-x-[30px] justify-between">
          {mangers.map(i => (
            <Employee key={i.id} {...i} />
          ))}
          <div className="w-[260px] " />
          <div className="w-[260px] " />
          <div className="w-[260px] " />
          <div className="w-[260px] " />
        </div>
      </div>

      <div className="flex flex-col gap-[18px]">
        <Typography variant="h3" className={"text-darkPurple"}>
          Developers
        </Typography>
        <div className="flex flex-wrap gap-x-[30px] justify-between">
          {employee.map(i => (
            <Employee key={i.id} {...i} />
          ))}
          <div className="w-[260px] " />
          <div className="w-[260px] " />
          <div className="w-[260px] " />
          <div className="w-[260px] " />
        </div>
      </div>
    </div>
  );
};

export default Team;
