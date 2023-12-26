"use client";
import { useAuthStore } from "@/app/store/authentication";
import { layoutSpacing } from "@/app/utils/classes";
import { Managers } from "@/app/utils/constant";
import { useState } from "react";
import RangePickerWrapper from "../RangePickerWrapper";
import Content from "./Content";
import Header from "./Header";

const Dashboard = () => {
  const { profile } = useAuthStore();
  const [[from, to], setDates] = useState<[Date, Date]>([
    new Date(),
    new Date(),
  ]);

  const userDetail = profile["User Detail"];

  return (
    <main className={layoutSpacing}>
      <Header title={`Hi, ${userDetail.first_name}!`} {...Managers[0]} />
      <RangePickerWrapper setDates={setDates} from={from} to={to} />
      <Content />
    </main>
  );
};

export default Dashboard;
