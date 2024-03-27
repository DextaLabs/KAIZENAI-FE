"use client";
import { employeeDetailPagePropsType } from "@/app/team/[employeeId]/page";
import { useTeamStore } from "@/provider/store/teams";
import { useLazyGetTeamMemberQuery } from "@/provider/store/teams/api";
import { useEffect, useState } from "react";
import RangePickerWrapper from "../RangePickerWrapper";
import Header from "../Team/Header";
import Content from "./Content";

const EmployeeDetail = (props: employeeDetailPagePropsType) => {
  const { teamMember } = useTeamStore();
  const [getTeamMember] = useLazyGetTeamMemberQuery();

  const [[from, to], setDates] = useState<[Date, Date]>([
    new Date(),
    new Date(),
  ]);

  useEffect(() => {
    if (teamMember.length === 0) {
      getTeamMember({});
    }
  }, []);

  const selectedEmployee = teamMember.find(
    i => i.Data["User id"] === Number(props.params.employeeId)
  );

  if (!selectedEmployee) {
    return <div className={"p-9"}>No Data Found</div>;
  }

  const { Name, Email } = selectedEmployee;

  return (
    <div className={"p-9"}>
      <Header
        title={`${Name}'s Dashboard`}
        email={Email}
        name={Name}
        image={"/assets/png/avatar.png"}
      />
      <RangePickerWrapper setDates={setDates} from={from} to={to} />
      <Content {...selectedEmployee} />
    </div>
  );
};

export default EmployeeDetail;
