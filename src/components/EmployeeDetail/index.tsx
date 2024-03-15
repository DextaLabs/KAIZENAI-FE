"use client";
import { employeeDetailPagePropsType } from "@/app/team/[employeeId]/page";
import { layoutSpacing } from "@/library/utils/classes";
import { Managers } from "@/library/utils/constant";
import { useState } from "react";
import RangePickerWrapper from "../RangePickerWrapper";
import Header from "../Team/Header";
import Content from "./Content";

const EmployeeDetail = (props: employeeDetailPagePropsType) => {
  const [[from, to], setDates] = useState<[Date, Date]>([
    new Date(),
    new Date(),
  ]);

  const selectedEmployee = Managers.find(
    i => i.id === Number(props.params.employeeId)
  );

  if (!selectedEmployee) {
    return <div className={layoutSpacing}>No Data Found</div>;
  }

  return (
    <div className={layoutSpacing}>
      <Header
        title={`${selectedEmployee.firstName}'s Dashboard`}
        {...selectedEmployee}
      />
      <RangePickerWrapper setDates={setDates} from={from} to={to} />
      <Content {...selectedEmployee} />
    </div>
  );
};

export default EmployeeDetail;
