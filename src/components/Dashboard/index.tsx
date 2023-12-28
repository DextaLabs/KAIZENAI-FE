"use client";
import { layoutSpacing } from "@/app/utils/classes";
import { Managers } from "@/app/utils/constant";
import { useState } from "react";
import RangePickerWrapper from "../RangePickerWrapper";
import Content from "./Content";
import Feedback from "./Feedback";
import Header from "./Header";

const Dashboard = () => {
  const [[from, to], setDates] = useState<[Date, Date]>([
    new Date(),
    new Date(),
  ]);

  return (
    <main className={layoutSpacing}>
      <Header {...Managers[0]} />
      <RangePickerWrapper setDates={setDates} from={from} to={to} />
      <Content />
      <Feedback />
    </main>
  );
};

export default Dashboard;
