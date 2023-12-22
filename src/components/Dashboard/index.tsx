"use client";
import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import { layoutSpacing } from "@/app/utils/classes";
import { Managers } from "@/app/utils/constant";
import RangePickerWrapper from "../RangePickerWrapper";

const Dashboard = () => {
  const [[from, to], setDates] = useState<[Date, Date]>([
    new Date(),
    new Date(),
  ]);

  return (
    <main className={layoutSpacing}>
      <Header title="Hi, Hassan!" {...Managers[0]} />
      <RangePickerWrapper setDates={setDates} from={from} to={to} />
      <Content />
    </main>
  );
};

export default Dashboard;
