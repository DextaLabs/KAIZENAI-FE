"use client";
import { useAuthStore } from "@/provider/store/authentication";
import { useTeamStore } from "@/provider/store/teams";
import { useGetTeamMemberQuery } from "@/provider/store/teams/api";
import { Typography } from "@mui/material";
import Employee from "./Employee";
import Header from "./Header";

const Team = () => {
  useGetTeamMemberQuery({});
  const { teamMember } = useTeamStore();
  const { profile } = useAuthStore();
  const userDetail = profile["User Detail"];
  const { email, first_name, last_name } = userDetail;

  return (
    <div className={"p-9"}>
      <Header
        title="My Teams"
        name={`${first_name} ${last_name}`}
        email={email}
        image={"/assets/png/avatar.png"}
      />

      <div className="flex flex-col gap-[18px]">
        <Typography variant="h3" className={"text-darkPurple"}>
          Developers
        </Typography>
        <div className="flex flex-wrap gap-x-[30px] justify-between">
          {teamMember?.map(i => (
            <Employee key={i.id} {...i} />
          ))}
          <div className="w-[260px] " />
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
