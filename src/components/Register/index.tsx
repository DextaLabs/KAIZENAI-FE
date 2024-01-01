"use client";
import { layoutSpacing } from "@/app/utils/classes";
import { ROLES } from "@/app/utils/enums";
import { Typography } from "@mui/material";
import { useState } from "react";
import Select from "../Shared/Select";
import Developers from "./Developer";

const UserType = [
  {
    value: ROLES.MANAGER,
    label: ROLES.MANAGER,
  },
  {
    value: ROLES.DEVELOPER,
    label: ROLES.DEVELOPER,
  },
];

const Register = () => {
  const [userType, setUserType] = useState(ROLES.MANAGER);

  return (
    <main className={layoutSpacing}>
      <Typography variant="h2" className="text-darkPurple">
        Register User
      </Typography>

      <div className="mt-[30px] max-w-[500px]">
        <Select
          options={UserType}
          placeholder="Select User type"
          disabled={UserType.length === 0}
          value={userType}
          onChange={(_, selectedValue) => {
            setUserType(selectedValue as ROLES);
          }}
        />
      </div>

      <Developers />
    </main>
  );
};

export default Register;
