import EmployeeDetail from "@/components/EmployeeDetail";
import React from "react";

export type employeeDetailPagePropsType = {
  params: {
    employeeId: string;
  };
};

const EmployeeDetailPage = (props: employeeDetailPagePropsType) => {
  return <EmployeeDetail {...props} />;
};

export default EmployeeDetailPage;
